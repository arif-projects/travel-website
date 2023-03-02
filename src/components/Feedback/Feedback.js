import React from 'react';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className="mb-5">
            <div className="container">
                <h3>Tourist Feedback</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feedback">
                            <img className="feedback-image" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Image-1.png" alt="" />
                            <h6>Jagoda Traynor</h6>
                            <p>Hiker</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco</p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feedback">
                            <img className="feedback-image" src="https://templatekit.jegtheme.com/hikker/wp-content/uploads/sites/139/2021/08/testimonial-N8572T7.jpg" alt="" />
                            <h6>Marion Weston</h6>
                            <p>Hiker</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco</p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feedback">
                            <img className="feedback-image" src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Image.jpg" alt="" />
                            <h6>Jenny Doe</h6>
                            <p>Hiker</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;