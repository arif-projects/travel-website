import React from 'react';
import About from '../About/About';
import Advantage from '../Advantage/Advantage';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Services></Services>
            <Advantage></Advantage>
            <About></About>
            <Feedback></Feedback>
            <Articles></Articles>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;