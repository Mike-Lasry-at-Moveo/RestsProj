import React from 'react';
import  { Link, useNavigate } from 'react-router-dom';
import LoginPage from 'Pages/Auth/Login/LoginPage';

import "Components/Navbar/Navbar.scss" 
import { ClassName, Path, Str } from 'Interfaces/Enums';
import authService from 'Services/auth';

export default function Navbar(){

    const navigate = useNavigate();

    const logoutHandler = () => { 
        authService.logout(); navigate(`/${Path.HOME_SFX}`); 
    }

    const LogoutButton = () => {
        return authService.isUserLogged() ? <button className={`${ClassName.NAV_BTN}${Str.SPACE}${ClassName.LOGOUT_BTN}`} onClick={logoutHandler}>Logout</button> : <div></div>
    }

    const AdminButton = () => {
        return authService.isUserAdmin() ? <button onClick={() => navigate(Path.ADMIN_SFX)} className={`${ClassName.NAV_BTN} ${ClassName.ADMIN_BTN}`}>ADMIN</button> : <React.Fragment></React.Fragment>
    }

    const LoginButton = () => {
        return !authService.isUserLogged() ? <button onClick={() => navigate(Path.LOGIN_SFX)} className={`${ClassName.NAV_BTN} ${ClassName.LOGIN_BTN}`}>LOGIN</button> : <React.Fragment></React.Fragment>
    }

    const SignupButton = () => {
        return !authService.isUserLogged() ? <button onClick={() => navigate(Path.SIGNUP_SFX)} className={`${ClassName.NAV_BTN} ${ClassName.SIGNUP_BTN}`}>SIGNUP</button> : <React.Fragment></React.Fragment>
    }

    const ProfileButton = () => {
        return authService.isUserLogged() ? <button onClick={() => navigate(Path.PROFILE_SFX)} className={`${ClassName.NAV_BTN} ${ClassName.PROFILE_BTN}`} >PROFILE</button> : <React.Fragment></React.Fragment>
    }

    const NavContent = () => {
        return authService.isUserLogged() ? <div><h3>Welcome, {authService.getUser().username}</h3></div> : <div><h3>Welcome </h3></div>
    }
    
    return (
        <div className={ClassName.NAVBAR}>
            {/* <Link to={Path.HOME_SFX}> */}
                <img onClick={() => navigate(Path.HOME_SFX)} className={ClassName.HOME_BTB} src={ClassName.HOME_ICON_SRC}/>
            {/* </Link> */}
            <div>
                <NavContent />
            </div>
            <div>
                <LoginButton />
                <SignupButton />
                <AdminButton />
                <ProfileButton />
                <LogoutButton />
            </div>
        </div>
    )
}


