import React, { useState } from 'react';
import 'Pages/Auth/Signup/SignupPage.scss';
import IAuth from 'Interfaces/Auth';
import { ClassName, Errors, InputTypes, Path, Str } from 'Interfaces/Enums';
import usersService from 'Services/users';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {

    const navigate = useNavigate();

    // Handlers functions

    const credentialsHandler = (value: string, inputType: string) => {
        switch (inputType.split(Str.SPACE)[1]) {
            case ClassName.UN_INP: setCredentials((prevState: IAuth) => { return { ...prevState, username: value } }); break;
            case ClassName.FN_INP: setCredentials((prevState: IAuth) => { return { ...prevState, firstName: value } }); break;
            case ClassName.LN_INP: setCredentials((prevState: IAuth) => { return { ...prevState, lastName: value } }); break;
            case ClassName.EMAIL_INP: setCredentials((prevState: IAuth) => { return { ...prevState, email: value } }); break;
            case ClassName.ADDR_INP: setCredentials((prevState: IAuth) => { return { ...prevState, address: value } }); break;
            case ClassName.PW_INP: setCredentials((prevState: IAuth) => { return { ...prevState, password: value } }); break;
            case ClassName.CNFRM_INP: setCredentials((prevState: IAuth) => { return { ...prevState, confirmPassword: value } }); break;
            default: alert(Errors.ERR);
        }
    }

    const signupHandler = async (event: any) => {
        event.preventDefault();
        if (!validateInputs()) return alert(Errors.FILL_CREDS);
        if (!passwordsMatch()) return alert(Errors.PW_MATCH);
        const axiosResponse = await usersService.signup(credentials);
        resetFields();  
        navigate(`/${Path.LOGIN_SFX}`)
    }

    // Util functions

    const validateInputs = (): boolean => {
        let condA = credentials.username != undefined && credentials.username != Str.EMPTY;
        let condB = credentials.firstName != undefined && credentials.firstName != Str.EMPTY;
        let condC = credentials.lastName != undefined && credentials.lastName != Str.EMPTY;
        let condD = credentials.email != undefined && credentials.email != Str.EMPTY;
        let condE = credentials.address != undefined && credentials.address != Str.EMPTY;
        let condF = credentials.password != undefined && credentials.password != Str.EMPTY;
        let condG = credentials.confirmPassword != undefined && credentials.confirmPassword != Str.EMPTY;;
        return condA && condB && condC && condD && condE && condF && condG;
    }

    const newAuthObject = (): IAuth => {
        let auth = {} as IAuth;
        auth.username = Str.EMPTY;
        auth.firstName = Str.EMPTY;
        auth.lastName = Str.EMPTY;
        auth.email = Str.EMPTY;
        auth.address = Str.EMPTY;
        auth.password = Str.EMPTY;
        auth.confirmPassword = Str.EMPTY;
        return auth;
    }

    const passwordsMatch = () => {
        return credentials.password === credentials.confirmPassword;
    }

    const resetFields = () => { // TODO: fix inputs reset: not working ??
        setCredentials((ps) => { return newAuthObject() });
    }
    const [credentials, setCredentials] = useState(newAuthObject())

    return (
        <div className={ClassName.SIGNUP_PAGE}>
            <h3>Join the crew!</h3>
            <form onSubmit={(e) => signupHandler(e)}>
                <div className={ClassName.SIGNUP_CNTRLS}>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Username</label><br />
                        <input value={credentials.username} className={`${ClassName.CREDS_INP} ${ClassName.UN_INP}`} type={InputTypes.TXT}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>First Name</label><br />
                        <input value={credentials.firstName} className={`${ClassName.CREDS_INP} ${ClassName.FN_INP}`} type={InputTypes.TXT}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Last Name</label><br />
                        <input value={credentials.lastName} className={`${ClassName.CREDS_INP} ${ClassName.LN_INP}`} type={InputTypes.TXT}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Email</label><br />
                        <input value={credentials.email} className={`${ClassName.CREDS_INP} ${ClassName.EMAIL_INP}`} type={InputTypes.TXT}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Address</label><br />
                        <input value={credentials.address} className={`${ClassName.CREDS_INP} ${ClassName.ADDR_INP}`} type={InputTypes.TXT}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Pasaword</label><br />
                        <input value={credentials.password} className={`${ClassName.CREDS_INP} ${ClassName.PW_INP}`} type={InputTypes.PW}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                    <div className={ClassName.SIGNUP_CNTRL}>
                        <label>Confirm Password</label><br />
                        <input value={credentials.confirmPassword} className={`${ClassName.CREDS_INP} ${ClassName.CNFRM_INP}`} type={InputTypes.PW}
                            onChange={(e) => credentialsHandler(e.target.value, e.target.className)} />
                    </div>
                </div>
                <div className={ClassName.SIGNUP_ACTNS}>
                    <div className={ClassName.SIGNUP_ACTN}>
                        <button className={ClassName.SIGNUP_BTN} type={InputTypes.SUBMIT}>Signup!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}