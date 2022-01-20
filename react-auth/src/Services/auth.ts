import { Role, Str } from "Interfaces/Enums";


const login = (token: string) => {
    setToken(token);
}

const logout = () => {
    removeCookie(Str.JWT)
}

const setToken = (token: string) => {
    addCookie(Str.JWT, token);
}

const getToken = (): string => {
    let token: string = Str.EMPTY;
    // console.log(`getting token: `, document.cookie);
    
    let cookies: string[] = document.cookie.split(Str.SEMI_COLON);
    cookies.forEach( cookie => {
        let kv_pair = cookie.split(Str.EQUALS);
        let key = kv_pair[0].trim();
        let value = kv_pair[1].trim();
        if(key == Str.JWT) token = value as string;            
    }); return token;   
}

const isUserLogged = () => {
    let res = isExist(getToken());
    // console.log(`is user logged: `, res);
    return  res;
}

const isExist = (data: any) => {
    if(!data) return false;
    return data != Str.EMPTY &&
            data != Str.SPACE &&
             data != 'undefined' &&
              data != null; 
}
const isUserAdmin = () => {
    const u = getUser();
    return u != Str.EMPTY && u.role == Role.ADMIN;
}

const getUser = () => {
    return parseToken(1);
}

const parseToken = (ix: number) => {
    const token = getToken();    
    if(token == Str.EMPTY) return Str.EMPTY;
    // console.log(`parsing user token`, token);
    
    const userPayload = token.split(Str.DOT)[ix];
    const parsedUser = window.atob(userPayload); 
    return JSON.parse(parsedUser);
}

const addCookie = (key: string, value: string) => {
    return document.cookie = `${key}${Str.EQUALS}${value}${Str.SEMI_COLON}`;
}

const removeCookie = (key: string) => {
    return document.cookie = `${key}${Str.EQUALS}${Str.SPACE}${Str.SEMI_COLON}${Str.EXP}${Str.EQUALS}${Str.PASSED_DATE}`;
}

const authService = {
    login,
    logout,

    getUser,
    getToken,

    isUserLogged,
    isUserAdmin,
}; export default authService;