import React from "react";
import "Components/User/UserBadge/UserBadge.scss"
import IUser from "Interfaces/User";
import * as icons from "react-icons/fa";
import { ClassName, Path } from "Interfaces/Enums";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserBadge(user: IUser) {
    return (
        <div className={ClassName.USR_BDG}>
            <span>{user.username}</span>
            <br/>
            <span>{user.email}</span>
        </div>
    )
}