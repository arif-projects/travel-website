import React, { useContext } from 'react';
import './Navber.css'
import logo from '../../image/logof.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Navber = () => {
    const [login, setLogin] = useContext(userContext);
    return (
        <div>
            <div className=" navber">
                <div className="row">
                    <div className="col-md-5">
                        <div className="navber-img">
                            <img className="logo" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="navber-items mt-3">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">Home</li>
                                </Link>

                                <Link to="/about" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">About</li>
                                </Link>

                                <Link to="/login" >
                                    <li className="items m-2 p-2">Contact</li>
                                </Link>

                                <Link to="/orders" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">My orders</li>
                                </Link>
                                {
                                    login.email ? <Link className="nav-element" to="/login">
                                        <li className="items m-2 p-2">LogOut</li>
                                    </Link> : <Link className="nav-element" to="/login">
                                        <li className="items m-2 p-2">Login</li>
                                    </Link>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;