import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import "./MyOrder.css";

const MyOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://holiday-nourish-server.vercel.app/services", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("added sucessfully");
          reset();
        }
      });
  };
  return (
    <div>
      <Navber></Navber>
      <h2>Add a service</h2>
      <div className="service-adding-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />{" "}
          <br />
          <input {...register("description")} placeholder="Description" />{" "}
          <br />
          <input {...register("img")} placeholder="Image url" /> <br />
          <input
            type="number"
            {...register("price")}
            placeholder="Price"
          />{" "}
          <br />
          <input type="submit" />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrder;
