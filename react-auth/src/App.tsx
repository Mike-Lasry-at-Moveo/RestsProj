import React from 'react';
import "App.scss"
import Navbar from 'Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from 'Pages/Auth/Login/LoginPage';
import SignupPage from 'Pages/Auth/Signup/SignupPage';
import AdminPage from 'Pages/Admin/AdminPage';
import HomePage from 'Pages/Home/HomePage';
import UserDetails from 'Components/User/UserDetails/UserDetails';
import { ClassName, Path } from 'Interfaces/Enums';
import ProfilePage from 'Pages/Profile/ProfilePage';
import AccessDenied from 'Components/Admin/AccessDenied/AccessDenied';
import RestaurantDetails from 'Components/Restaurant/RestaurantDetails/RestaurantDetails';

export default function App() {
  return (
    <div className={ClassName.APP}>
      { <BrowserRouter >
        <Navbar />
        <Routes>
            <Route path={`/${Path.HOME_SFX}`} element={<HomePage/>}/>
            <Route path={`/${Path.LOGIN_SFX}`} element={<LoginPage/>}/>
            <Route path={`/${Path.SIGNUP_SFX}`} element={<SignupPage/>}/>
            <Route path={`/${Path.ADMIN_SFX}`} element={<AdminPage/>}/>
            <Route path={`/${Path.PROFILE_SFX}`} element={<ProfilePage/>}/>
            <Route path={`/${Path.UPDT_USR}/${Path.ID_PARAM}`} element={<UserDetails/>}/>
            <Route path={`/${Path.UPDT_REST}/${Path.ID_PARAM}`} element={<RestaurantDetails/>}/>
            <Route path={`/${Path.ACCESS_DENIED}`} element={<AccessDenied/>}/>
        </Routes>
        </BrowserRouter>
      }
    </div>
  );
}
