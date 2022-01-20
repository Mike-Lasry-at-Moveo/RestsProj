import { Response, Request, NextFunction } from "express";
import signJWT from "../middleware/signJWT";
import { IUser, User } from "../models/user";
import { securityService } from "../services/security";
import { usersService } from "../services/user";

const getAllUsers = async (req: Request, res: Response) => {
    const users = await usersService.getUsers();
    res.status(201).send(newResponse(users));
};

const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await usersService.getUserById(id);
    res.status(201).send(newResponse(user));
};

const createUser = async (firstName: string,lastName: string,username: string,email: string,address: string, password: string): Promise<boolean> => {
    const user = await usersService.createUser({ firstName,lastName,username,email,address }, password);
    return isExist(user);
};

const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const {key, value} = securityService.decryptJson(req.body.data);
    const user = await usersService.updateUser(id, key, value);
    const outPayload = isExist(user) ? newResponse(user) : newResponse(null,"Failed to update user.");
    res.status(201).send(outPayload);
};

const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const success = await usersService.deleteUser(id);
    res.status(201).send(success);
};

const login = async (req: Request, res: Response) => {    
    const { username, password } = securityService.decryptJson(req.body.data);
    const users = await User.getByUsername(username);
    if(!isExist(users) || users.length == 0)
        return res.status(404).send(newResponse(null,"Can't find users."));
    
    const providedHash = securityService.hashPassword(password, users[0].salt);
    let authenticated: boolean = users[0].hash === providedHash;

    if(authenticated){
        signJWT(users[0], (err,token) => {
            let status = err ? 500 : 200;
            let success = err ? false : true;
            let message = success ? token : null;
            res.status(status).json({success:success, message: message});
        });
    } else res.status(500).json({success: false, message:"Can't sign token", data: null});
}

const signup = async (req: Request, res: Response) => {
    const inPayload = securityService.decryptJson(req.body.data);
    const { firstName,lastName,username,email,address,password } = inPayload;

    const user = { firstName,lastName,username,email,address,password };
    const usersTaken = await usersService.getUserByUsername(user.username);
    if(usersTaken.length != 0) return res.status(409).send(newResponse(null,"Username already in use"));
    
    const success = await createUser(firstName,lastName,username,email,address,password);
    const outPayload = success ? newResponse(user) : newResponse(null,'Failed to create user.');
    res.status(success ? 200 : 500).send(outPayload);
}

// Util functions

const newResponse = (data: any, msg?:string, encString:boolean = false) => {
    const success = isExist(data);
    if(success) data = encString ? 
        securityService.encryptString(data) : 
            securityService.encryptJson(data);
    return {
        success: success,
        data: data,
        message: msg || ''
    };
}

const isExist = (data: any): boolean => {
    return ((data != null) && (data != undefined));
}

const usersController = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    login,
    signup
}; export { usersController };