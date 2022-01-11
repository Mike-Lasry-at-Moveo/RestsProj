import React from 'react'
import "Pages/Profile/ProfilePage.scss"
import { deflate } from 'zlib'
import { useEffect } from 'react'
import authService from 'Services/auth';
import { useNavigate } from 'react-router-dom';
import { Path } from 'Interfaces/Enums';

export default function ProfilePage() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!authService.isUserLogged())
            navigate(`/${Path.LOGIN_SFX}`)
    }, []);
    return (<div>Profile Page Works!</div>)
}