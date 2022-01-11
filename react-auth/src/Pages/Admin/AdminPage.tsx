import React from "react";
import "Pages/Admin/AdminPage.scss";
import UserList from "Components/User/UserList/UserList";
import { useEffect } from "react";
import authService from "Services/auth";
import { useNavigate } from "react-router-dom";
import { AdminOptions, ClassName, Path } from "Interfaces/Enums";
import { useState } from "react";
import AdminMenu from "Components/Admin/AdminMenu/AdminMenu";
import RestaurantsList from "Components/Restaurant/RestaurantList/RestaurantList";

export default function AdminPage(){
    const navigate = useNavigate();
    const [adminOptions, setAdminOptions] = useState(AdminOptions.USERS);

    const AllUsers = () => {
        return <div className={ClassName.ALL_USERS}> <UserList />
        </div>
    }

    const AllRestaurants = () => {
        return <RestaurantsList />;
    }

    const getContent = () => {
        switch(adminOptions){
            case AdminOptions.USERS: return <AllUsers/>;
            case AdminOptions.RESTAURANTS: return <AllRestaurants/>;
        }
    }

    const onChangeOprionHandler = (option: AdminOptions) => {
        setAdminOptions((ps) => option);
    }

    useEffect(() => {
        if(!authService.isUserLogged()) return navigate(`/${Path.PROFILE_SFX}`);
        if(!authService.isUserAdmin()) return navigate(`/${Path.ACCESS_DENIED}`);
    }, []);

    return (
    <div className={ClassName.ADMIN_PAGE}>

        <div className={ClassName.ADMIN_CONTENT}>
            {getContent()}
        </div>

        <div className={ClassName.ADMIN_CTRL}>
            <AdminMenu onOptionChange={onChangeOprionHandler}/>
        </div>

    </div>
    )
}