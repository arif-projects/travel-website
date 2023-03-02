import React from 'react';
import About from '../About/About';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="banner-container">
                <div className="top">
                    <div className="banner-textt">
                        <h3>About us</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Molestiae eaque fugit, reiciendis voluptatibus dolore, adipisci quod corporis </p>
                    </div>


                </div>
            </div>
            <About></About>
            <Articles></Articles>
            <Footer></Footer>

        </div>
    );
};

export default Aboutus;