import React from "react";
import "Components/Restaurant/RestaurantBadge/RestaurantBadge.scss";
import { ClassName } from "Interfaces/Enums";
import IRestaurant from "Interfaces/Restaurant";

export default function RestaurantBadge (props: {restaurant: IRestaurant}){
    return (
        <div className={ClassName.RESTS_BADGE}>
            <h3 className={ClassName.REST_INFO}>{props.restaurant.name}</h3>
            <h5 className={ClassName.REST_INFO}>{props.restaurant.address}</h5>
            <span className={ClassName.REST_INFO}>
                {props.restaurant.dishes ? <span>{props.restaurant.dishes.length}Dishes</span> : <></> }
            </span>
        </div>
    )
}