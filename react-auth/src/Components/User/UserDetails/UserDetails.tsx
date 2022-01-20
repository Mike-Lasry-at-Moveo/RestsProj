import React from "react";
import "Components/User/UserDetails/UserDetails.scss"
import { Link, useParams } from "react-router-dom";
import { ClassName,  Errors,  InputTypes, Path, Str, UpdateOptions } from "Interfaces/Enums";
import { useState } from "react";
import IUser from "Interfaces/User";
import { useEffect } from "react";
import usersService from "Services/users";
import IUpdateUser from "Interfaces/Update";
import IResponse from "Interfaces/Response";
import securityService from "Services/security";

export default function UserDetails() {

    const newUser = (): IUser => {
        return {
            _id: Str.EMPTY,
            username: Str.EMPTY,
            firstName: Str.EMPTY,
            lastName: Str.EMPTY,
            email: Str.EMPTY,
            address: Str.EMPTY,
        } as IUser
    }

    const newUpdate = () => {
        return {
            key: 'Choose a key to update',
            value: ''
        } as IUpdateUser;
    }

    const getUserUpdated = (): IUser => {
        switch (update.key) {
            case UpdateOptions.UN: return { ...user, username: update.value };
            case UpdateOptions.FN: return { ...user, firstName: update.value };
            case UpdateOptions.LN: return { ...user, lastName: update.value };
            case UpdateOptions.EMAIL: return { ...user, email: update.value };
            case UpdateOptions.ADDR: return { ...user, address: update.value };
            case UpdateOptions.ROLE: return { ...user, role: update.value };
            default: return { } as IUser;
        }
    }

    const resetFields = () => {
        setUpdate((ps) => newUpdate());
    }

    const validateFields = (): boolean => {
        return update.value != Str.EMPTY;
    };

    const updateUser = async (e: any) => {
        e.preventDefault();
        const payload = securityService.encryptJson(update);
        const responseWrapper = await usersService.changeUser(user._id as string, {data: payload});

        const response = responseWrapper.data;
        if (response.success) {
            setUser((prevState) => { return { ...getUserUpdated() } });
            resetFields();
        }
    }

    const pickUpdateKey = (event: any) => {
        setUpdate((prevState) => {
            return {
                ...prevState,
                key: event.target.value
            };
        });
    }

    const pickUpdateValue = (event: any) => {
        setUpdate((prevState) => {
            return {
                ...prevState,
                value: event.target.value
            };
        });
    }

    const { id } = useParams();
    const [user, setUser] = useState(newUser() as IUser);
    const [update, setUpdate] = useState(newUpdate() as IUpdateUser)

    useEffect(() => {
        const fetchUser = async () => {
            let response: any = null;
            const responseWrapper = await usersService.getUserById(id!);
            if(responseWrapper != null) response = responseWrapper.data;
            if (response && response.success) setUser((ps) => securityService.decryptJson(response.data));
            else return alert(Errors.AXIOS);
        }; fetchUser();
    }, []);

    return (
        <div className={ClassName.USR_DETS}>
            <div className={ClassName.USR_INFO}>
                <h3>Welcome to {user.username}'s info page</h3>
                <p>
                    {user.firstName} {user.lastName}({user.role})<br />
                    <br />
                    {user.email}<br />
                    {user.address}<br />
                </p>
            </div>

            <br />
            <div className={ClassName.UPDT_FORM}>
                <form onSubmit={(e) => updateUser(e)}>
                    <div className={ClassName.UPDT_CNTRLS}>
                        <div className={ClassName.UPDT_CNTRL}>
                            <label>Choose key to update</label><br /><br />
                            <select value={update.key} onChange={(e) => pickUpdateKey(e)}>
                                <option value={UpdateOptions.UN}>Username</option>
                                <option value={UpdateOptions.FN}>First Name</option>
                                <option value={UpdateOptions.LN}>Last Name</option>
                                <option value={UpdateOptions.EMAIL}>Email</option>
                                <option value={UpdateOptions.ADDR}>Address</option>
                                <option value={UpdateOptions.ROLE}>Role</option>
                            </select>
                        </div>
                        <div className={ClassName.UPDT_CNTRL}>
                            <label>Choose the new value</label><br /><br />
                            <input onChange={(e) => pickUpdateValue(e)} className={ClassName.UPDT_VAL}
                                value={update.value} type={InputTypes.TXT} />
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