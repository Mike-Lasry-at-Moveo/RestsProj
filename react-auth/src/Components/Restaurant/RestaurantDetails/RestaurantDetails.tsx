import React, { useState } from "react";
import "Components/Restaurant/RestaurantDetails/RestaurantDetails.scss";
import { ClassName, Errors, InputTypes, Path, Str, UpdateOptions } from "Interfaces/Enums";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import restaurantsService from "Services/restaurants";
import IResponse from "Interfaces/Response";
import IRestaurant from "Interfaces/Restaurant";
import IUpdate from "Interfaces/Update";

export default function RestaurantDetails() {

    const newRestaurant = () => {
        return {
            name: Str.EMPTY,
            dishes: [Str.EMPTY],
            open: 128,
            address: Str.EMPTY, 
        } as IRestaurant;
    };

    const newUpdate = () => {
        return {
            key: UpdateOptions.ADDR,
            value: Str.EMPTY
        } as IUpdate;
    };

    const getRestaurantUpdate = (): IRestaurant => {
        switch(update.key){
            case UpdateOptions.NAME: return { ...restaurant, name: update.value }
            case UpdateOptions.ADDR: return { ...restaurant, address: update.value }
            case UpdateOptions.DISHES: return { ...restaurant, dishes: [update.value] }
            case UpdateOptions.OPEN: return { ...restaurant, open: parseInt(update.value) }
            default: alert(Errors.ERR); return {} as IRestaurant; 
        }
    };

    const updateRestaurant = async (e: any) => {
        e.preventDefault();
        const responseWrapper = await restaurantsService.updateRestaurant(restaurant._id!, update);
         
        let response = responseWrapper.data as IResponse;
        if(response.acknowledged){
            if(!response.modifiedCount) return alert("nothing has changed!");
            else setRestaurant((prevState) => { return getRestaurantUpdate() });
        }; return alert(Errors.ERR);
    };

    const getOpenTime = (open: number): string => {
        switch(open){
            case 128: return Str.ALL_WEEK;
            default: return Str.NA;
        }
    };

    const pickUpdateKey = (e: any) => {
        e.preventDefault();
        setUpdate((prevState) => {
            return {
                ...prevState,
                key: e.target.value
            }
        })
    };

    const pickUpdateValue = (e: any) => {
        e.preventDefault();
        setUpdate((prevState) => {
            return {
                ...prevState,
                value: e.target.value
            }
        })
    };

    const [restaurant, setRestaurant] = useState(newRestaurant() as IRestaurant);
    const [update, setUpdate] = useState(newUpdate() as IUpdate);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchRestaurants = async () => {
            const responseWrapper = await restaurantsService.getRestaurantById(id!);;
            let response = responseWrapper.data as IResponse;            
            if(response.success) setRestaurant((ps) => response.data);
        }; fetchRestaurants();
    },[]);

    return (
        <div className={ClassName.RESTS_DETS}>
            <div className={ClassName.REST_INFO}>
                <h3>Welcome to {restaurant.name}'s info page</h3>
                <p>
                <span>"{ restaurant.name.toUpperCase() }" Restaurant</span><br/>
                <span>{ restaurant.dishes?.length } Dishes</span><br/>
                <span>{ restaurant.address }</span><br/>
                <span>Open: { getOpenTime(restaurant.open!) }</span><br/>
                </p>
            </div>

            <br />
            <div className={ClassName.UPDT_FORM}>
                <form onSubmit={(e) => updateRestaurant(e)}>
                    <div className={ClassName.UPDT_CNTRLS}>
                        <div className={ClassName.UPDT_CNTRL}>
                            <label>Choose key to update</label><br /><br />
                            <select value={update.key} onChange={(e) => pickUpdateKey(e)}>
                                <option className={ClassName.UPDT_OPTS} value={UpdateOptions.NAME}>Name</option>
                                <option className={ClassName.UPDT_OPTS} value={UpdateOptions.ADDR}>Address</option>
                                <option className={ClassName.UPDT_OPTS} value={UpdateOptions.DISHES}>Dishes</option>
                                <option className={ClassName.UPDT_OPTS} value={UpdateOptions.OPEN}>Open Time</option>
                            </select>
                        </div>
                        <div className={ClassName.UPDT_CNTRL}>
                            <label>Choose the new value</label><br /><br />
                            <input onChange={(e) => pickUpdateValue(e)} value={update.value} type={InputTypes.TXT} />
                        </div>
                    </div>
                    <div className={ClassName.UPDT_ACTNS}>
                        <div className={ClassName.UPDT_ACTN}>
                            <button type={InputTypes.SUBMIT} className={ClassName.UPDT_BTN}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <Link to={`/${Path.ADMIN_SFX}`}>Back to list</Link>
        </div>
    )
}