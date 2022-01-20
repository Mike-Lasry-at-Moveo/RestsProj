import React from "react";
import axios from "axios";
import { Errors, Path, Str } from "Interfaces/Enums";
import IAuth from "Interfaces/Auth";
import IUpdateUser from "Interfaces/Update";
import securityService from "./security";

const getAllUsers = (token: string) => {
    
    token = securityService.encryptString(token);
    const config = { headers: { [Str.AUTH]: `${Str.BEARER}${Str.COLON}${Str.SPACE}${token}` } }; 
    return axios.get(`${Path.BASE_URL}/${Path.USERS_SFX}`, config);
}

const getUserById = (id: string) => {
    return axios.get(`${`${Path.BASE_URL}/${Path.USERS_SFX}`}/${id}`);
}

const signup = (credentials: IAuth) => {
    let payload = securityService.encryptJson(credentials);
    return axios.post(`${`${Path.BASE_URL}/${Path.USERS_SFX}`}`, {data:payload});
}

const login = (payload: IAuth) => { 
    let encPayload = securityService.encryptJson(payload);
    return axios.post(`${`${Path.BASE_URL}/${Path.USERS_SFX}`}/${Path.LOGIN_SFX}`, {data: encPayload});
}

const changeUser = (id: string, payload: any) => {
    return axios.patch(`${`${Path.BASE_URL}/${Path.USERS_SFX}`}/${id}`, payload);
}

const deleteUser = (id: string) => {
    return axios.delete(`${`${Path.BASE_URL}/${Path.USERS_SFX}`}/${id}`);
}

const usersService = {
    getAllUsers,
    getUserById,
    login,
    signup,
    changeUser,
    deleteUser,
}; export default usersService;