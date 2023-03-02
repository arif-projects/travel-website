import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="mb-5 subscribe">
            <div className="container">
                <h2>Subcribe To Our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna</p>

                <input className="input" type="text" placeholder="Your email address" />
                <input className="sub-input" type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default Subscribe;