import React from 'react';
import './Footer.css'
import logo from '../../image/logof.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Contact</p>
                        <p>Login</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Useful links</h5>
                        <p>Terms of use</p>
                        <p>Our Policy</p>
                        <p>Descliminer</p>
                        <p>FAQ</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Info</h5>
                        <p>Jl. Raya Ubud No.88, Bali - 80571</p>
                        <p>+62 361 154874</p>
                        <p>ariful@gmail.com</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Make a Reservation</h5>
                        <p>Our Support and Sales team is available 24 /7 to <br /> answer your queries</p>
                        <p></p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>Holiday nourish designed by Mohammad Arif</p>
                    </div>
                    <div className="col-md-6">
                        <p>Copyright &copy 2021. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;