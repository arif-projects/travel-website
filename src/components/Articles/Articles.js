import React from 'react';
import './Articles.css'

const Articles = () => {
    return (
        <div className="mb-5">
            <div className="container">
                <div className="article-header mb-3">
                    <div className="row">
                        <div className="col-md-6 text-start">
                            <h2>Tips & Article</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</p>
                        </div>
                        <div className="col-md-6">
                            <button className="discover-button">View more</button>
                        </div>
                    </div>
                </div>

                <div className="article-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/exotic-tropical-scenery-beach-landscape-1024x768.jpg" alt="" />
                            <br />
                            <p>Stories | Tips</p>

                            <h4 className="text-start">Travel Stories for Now and the Future</h4>
                            <br />
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                            <button className="discover-button d-flex justify-content-start">Read More</button>

                        </div>
                        <div className="col-md-6 sideber">
                            <div className="side-ber1 text-start border mb-5">
                                <p>Destinations | Travel</p>
                                <h4>9 Popular Travel Destinations on <br /> Sale in 2020</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna</p>
                                <button className="discover-button d-flex justify-content-start">Read More</button>
                            </div>
                            <div className="side-ber1 text-start border">
                                <p>Tips | Travel</p>
                                <h4>How Are We Going to Travel in 2021?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna</p>
                                <button className="discover-button d-flex justify-content-start">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;