import React from 'react';
import './About.css';
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
    return (
        <div className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-title text-start">
                            <h3>The Best Journeys In Life Are Those That <br /> Answer Questions You Never Thought To Ask</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            <br />
                            <p><AiOutlineCheck />Vivamus starlord finibus, dictum massa eget suscipit metus nami </p>
                            <p><AiOutlineCheck />Vivamus starlord finibus, dictum massa eget suscipit metus nami </p>
                            <p><AiOutlineCheck />Vivamus starlord finibus, dictum massa eget suscipit metus nami </p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute irure</p>
                            <button className="about-button">About us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <img className="w-75 about-image" src="https://i.ibb.co/LgDbCYb/hiker-at-a-mountain-pb9f8naytqbj5s6mn02gqhhqj0iwe5cd6kl030zcaw.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;