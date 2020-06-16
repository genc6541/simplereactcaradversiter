import React, { useState, useEffect, useContext,useRef } from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';
import { LoginConstants } from '../login/login-constants';
import { isUndefined, isNull } from 'lodash';
import UserContext from "./user-context";
import { Redirect } from "react-router-dom";
import './login.css';

function Login(props: any) {

    const [state, setState] = useState({
        loginValidation: false,
        isUserInfoValid: false,
        userName: undefined,
        password: undefined,
        errorMessageList: [] as string[],
        counter: 0,
        redirect: false
    })


    let activeUserInfo = useContext(UserContext);
    const userNameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        console.log('handleSubmit!');
        validateLoginForm();

    }

    const validateLoginForm = () => {
        let loginInfos = {};
        const { userName, password } = state;
        setState({
            ...state,
            loginValidation: true,
            isUserInfoValid: true
        });

        if (isUndefined(userName) || isUndefined(password)) {
            if (isUndefined(userName)) {
                state.errorMessageList.push(LoginConstants.userNameRequiredMessage);

            }

            if (isUndefined(password)) {
                state.errorMessageList.push(LoginConstants.passWordRequiredMessage);

            }

            setState({
                ...state,
                loginValidation: false
            });

        } else {

            var userFound = LoginConstants.validUserInfos.find((x: any) => x.user == userName && x.password == password);
            if (isUndefined(userFound)) {
                setState({
                    ...state,
                    isUserInfoValid: false,
                    loginValidation: false
                });
                state.errorMessageList.push(LoginConstants.userInfoInvalidErrorMessage);
                debugger;
                if(userNameRef.current){
                    userNameRef.current.value= ""; 
                }

                
            } else {

                const userInfo = {
                    user: userFound.user,
                    isAdmin: userFound.isAdmin
                }
                loginInfos = userInfo;
                if (props && props.setUserContext) {

                    props.setUserContext(loginInfos);

                }
            }
        }
    }


    const onChangeUserName = (e: any) => {
        setState({
            ...state,
            userName: e.target.value,
            errorMessageList: []
        })
    }

    const onChangePassword = (e: any) => {
        setState({
            ...state,
            password: e.target.value,
            errorMessageList: []
        });
    }


    useEffect(() => {
        console.log('useEffect!');

        if (state.loginValidation) {
            setState({
                ...state,
                redirect: true
            })

        }
        console.log("Current user : ", activeUserInfo.user);
    });

    if (state.redirect) {

        if (!isUndefined(activeUserInfo) && activeUserInfo.isAdmin) {
            return (<Redirect to="/adminpanel" />);

        } else {
            return (<Redirect to="/homepage" />);
        }
    } else {
        return (
            <div className={"login"}>
                <Row>
                    <Col>
                        <h2 style={{ marginTop: "200px", marginBottom: "10px" }}>Login Page</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input name="userName" ref={userNameRef}  placeholder={"Kullanıcı Adı"} onChange={onChangeUserName} style={{ marginTop: '10px', marginBottom: '5px' }} ></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input name="password"  type="password" value={state.password} placeholder={"Şifre"} onChange={onChangePassword} style={{ marginBottom: '5px' }}></input>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Button variant="success" onClick={handleSubmit}>Login</Button>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul style={{ listStyle: "none" }}>
                            {state.errorMessageList.map(error => {
                                return (<li>{error}</li>);
                            })}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{}</h1>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default Login;