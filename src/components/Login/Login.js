import React, { useContext, useState } from 'react';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import Subscribe from '../Subscribe/Subscribe';
import './Login.css';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
initializeFirebase();
const provider = new GoogleAuthProvider();

const Login = () => {
    const [login, setLogin] = useContext(userContext);
    const [user, setUser] = useState({});

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email } = result.user;
                const logUser = {
                    name: displayName,
                    email: email
                };
                setUser(logUser);
                setLogin(logUser);
                history.replace(from);
                // console.log(user);
            })
    }

    return (
        <div>
            <Navber></Navber>

            <div className="container mt-5 mb-5">
                <div className="login d-flex justify-content-center align-items-center">
                    <div className="login-form">

                        {
                            user.email && <h2>Welcome {user.name}</h2>
                        }
                        <h3 className="login-text">Please Log in here!</h3>
                        <button onClick={handleGoogleSignin} className="login-button">Login with google</button>
                    </div>
                </div>

            </div>

            <Articles></Articles>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Login;