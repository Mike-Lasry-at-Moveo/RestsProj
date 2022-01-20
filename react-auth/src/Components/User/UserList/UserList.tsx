import React, { useEffect, useState } from "react";
import "Components/User/UserList/UserList.scss"
import usersService from "Services/users";
import { ClassName, Errors, Path } from "Interfaces/Enums";
import IResponse from "Interfaces/Response";
import IUser from "Interfaces/User";
import UserBadge from "../UserBadge/UserBadge";
import { Link, useNavigate } from "react-router-dom";
import authService from "Services/auth";
import securityService from "Services/security";


export default function UserList() {

    const responseHandler = (response: IResponse) => {
        if (response.success) setUsers((ps) => securityService.decryptJson(response.data));
        else alert(Errors.ERR);
    };

    const deleteUser = async (id: string) => {
        const response = await usersService.deleteUser(id)
        if (!response.data.deletedCount) return alert(Errors.DEL_FAIL);
        const newUsers = users.filter(u => u._id != id);
        setUsers((ps) => newUsers);
    };

    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseWrapper = await usersService.getAllUsers(authService.getToken());
                if (responseWrapper && responseWrapper.data)
                responseHandler(responseWrapper.data);
            } catch (err) { console.error.bind(Errors.AXIOS) }
        }; fetchUsers();
    }, []);
    
    const [users, setUsers] = useState([] as IUser[]);
    const navigate = useNavigate();

    return (
        <div className={ClassName.USR_LIST}>
            {
                users.map((usr, ix) => (
                    <div className={ClassName.USR_CARD} key={ix}>
                        <button onClick={() => navigate(`/${Path.UPDT_USR}/${usr._id}`)} className={ClassName.UPDT_USR}>
                            UPDATE
                        </button>

                        <UserBadge {...usr} />
                        <button className={ClassName.DEL_USR} onClick={() => { deleteUser(usr._id as string) }}>DEL</button>
                    </div>
                ))
            }
        </div>
    );
}