import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import './Advantage.css'

const Advantage = () => {
    const [advantage, setAdvantage] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arif-projects/fakedb/main/advantage.json')
            .then(res => res.json())
            .then(data => setAdvantage(data));
    }, [])
    return (
        <div>
            <div className="container">
                <div className="advantage-header mb-3">
                    <h1>Why Holiday Nourish!!</h1>
                    <h4>WE PROVIDE THE BEST HIKING AND TREKKING To <br /> YOU JOURNEY</h4>
                </div>

                <div className="advantage-body">
                    <div className="row">
                        {
                            advantage.map(pd => (
                                <div className="col-md-4">
                                    <div className="ad-card border mb-3">
                                        <img className="w-25" src={pd.img} alt="" />
                                        <h4>{pd.name}</h4>
                                        <p>{pd.description}</p>
                                        <p className="read-more">Read More<AiOutlineArrowRight /></p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;