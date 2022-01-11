import React from "react";
import "Components/Restaurant/RestaurantCard/RestaurantCard.scss";
import { ClassName, Path } from "Interfaces/Enums";
import { Link } from "react-router-dom";
import IRestaurant from "Interfaces/Restaurant";
import RestaurantBadge from "../RestaurantBadge/RestaurantBadge";

export default function RestaurantCard(props:{restaurant: IRestaurant, ix: number}) {
    return (
        <div className={ClassName.REST_CARD}>
            <div className="restuarantImg">
                <img className="restaurantImage" src={props.restaurant.imgUrl}/>
                <div className="restaurantOverlay"><br/>{props.restaurant.description}<br/></div>
            </div>
            <RestaurantBadge restaurant={props.restaurant} key={props.ix} />
        </div>
    )
}