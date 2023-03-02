import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import "./Check.css";

const Check = () => {
  const [servicess, setServices] = useState([]);
  const { pId } = useParams();
  // console.log(id);
  useEffect(() => {
    fetch("https://holiday-nourish-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const serviceId = servicess.find((pdId) => pdId.id === Number(pId));

  // console.log(serviceId);
  return (
    <div>
      <Navber></Navber>
      <div className="check">
        <div className="container ss">
          <div className="choice">
            <h3>Packege Name: {serviceId?.name}</h3>
            <h3>Packege Price: {serviceId?.price}</h3>
            <button className="discover-button">Add to proceed</button>{" "}
            <button className="discover-button">Decline</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Check;
