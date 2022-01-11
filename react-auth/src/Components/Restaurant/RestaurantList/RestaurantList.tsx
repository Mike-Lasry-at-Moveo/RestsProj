import { ChangeEvent } from "react";
import "Components/Restaurant/RestaurantList/RestaurantList.scss";
import { ClassName, Errors, Path, Str } from "Interfaces/Enums";
import { useState } from "react";
import { useEffect } from "react";
import restaurantsService from "Services/restaurants";
import IResponse from "Interfaces/Response";
import IRestaurant from "Interfaces/Restaurant";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import useDebounce from "CustomHooks/Debounce";


export default function RestaurantsList() {

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue((ps) => e.target.value)
    }
    
    const ListItems = () => {
        const rests = debounceValue == Str.EMPTY ? restaurants.slice(0,10) : restaurants;
        return <div className={ClassName.LIST_ITEMS}>
            {   
                rests.map((rest, ix) => { return <RestaurantCard restaurant={rest} ix={ix} key={ix} />})
            } 
        </div>
    };
    
    const [searchValue, setSearchValue] = useState<string>(Str.EMPTY);
    const debounceValue = useDebounce<string>(searchValue);
    const [restaurants, setRestaurants] = useState([] as IRestaurant[]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const responseWrapper = await restaurantsService.searchRestaurants(searchValue);
            const response = responseWrapper.data as IResponse;
            if(response.success) setRestaurants((ps) => response.data);
            else alert(Errors.ERR);
        }; fetchRestaurants();
    },  [debounceValue]);

    return (
        <div className={ClassName.RESTS_LIST}>

            <div className={ClassName.LIST_SEARCH}>
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} 
                    value={searchValue} className={ClassName.SEARCH_INP} placeholder={Str.SEARCH}/>
                     {(debounceValue != Str.EMPTY) && (restaurants.length != 0) ? <div className={ClassName.MSG_BLOCK}><span>{restaurants.length} Results Found! </span></div> : <div className={ClassName.MSG_BLOCK}></div>}
            </div>
            {restaurants.length ? <ListItems /> : <h1>No Results Found</h1>}
        </div>
    )
}