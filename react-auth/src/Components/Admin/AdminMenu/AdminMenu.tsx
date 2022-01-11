import React from "react";
import "Components/Admin/AdminMenu/AdminMenu.scss";
import { AdminOptions, ClassName } from "Interfaces/Enums";

export default function AdminMenu(props:{onOptionChange: (option: AdminOptions) => void}){
    return <div className={ClassName.ADMIN_MENU}>
        <h1>Admin Menu</h1>
        <button onClick={() => props.onOptionChange(AdminOptions.RESTAURANTS)} className={ClassName.ADMIN_CNTRLS}>Restaurants</button>
        <button onClick={() => props.onOptionChange(AdminOptions.USERS)} className={ClassName.ADMIN_CNTRLS}>Users</button>
    </div>
}