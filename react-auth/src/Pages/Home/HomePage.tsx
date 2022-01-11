import React, { useEffect, useState } from 'react';
import "Pages/Home/HomePage.scss"
import usersService from 'Services/users';
import { ClassName, Color, Errors, Str } from 'Interfaces/Enums';
import authService from 'Services/auth';
import data from "Config/Assets/RestaurantsData" 
import restaurantsService from 'Services/restaurants';
import RestaurantCard from 'Components/Restaurant/RestaurantCard/RestaurantCard';
import IRestaurant from 'Interfaces/Restaurant';
import IResponse from 'Interfaces/Response';
import RestaurantsList from 'Components/Restaurant/RestaurantList/RestaurantList';
import securityService from 'Services/security';
export default function HomePage() {

    
    // const populateDB = () => {
    //     data.restaurants.forEach((restaurant)=> {
    //         restaurantsService.createRestaurant(restaurant);
    //     })
    // };

    return (
        <div className={ClassName.HOME_PAGE}>
            <h1>Welcome to Homepage!</h1>            
                {/* <button disabled className={ClassName.POP_DB} onClick={() => populateDB()}>Populate Restaurants Collection</button> */}
            <RestaurantsList />
        </div>
    )
}