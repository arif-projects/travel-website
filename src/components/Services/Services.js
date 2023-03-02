import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Services = () => {
  const [servicess, setServices] = useState([]);

  useEffect(() => {
    fetch("https://holiday-nourish-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // `/check/${id}`

  return (
    <div>
      <div className="container">
        <div className="service-header">
          <div className="row">
            <div className="col-md-7">
              <div className="service-header-text text-start">
                <h2>Popular Destinations</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <br /> tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="button d-flex align-items-end justify-content-end">
                <button className="discover-button mt-2">Discover More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="service-body">
          <div className="row">
            {servicess.map((pd) => (
              <div className="col-md-4 mb-5">
                <div className="card">
                  <div className="card-image">
                    <img className="w-100 card-image" src={pd.img} alt="" />
                  </div>
                  <div className="card-text">
                    <div className="row">
                      <div className="col-md-8 d-flex align-items-srart justify-content-start">
                        <h4>{pd.name}</h4>
                      </div>
                      <div className="col-md-4 d-flex align-items-end justify-content-end">
                        <p className="text-price">${pd.price}</p>
                      </div>
                    </div>
                    <p className="text-start">{pd.description}</p>

                    <Link
                      to={`/check/${pd.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button className="discover-button d-flex align-items-end">
                        Book now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
