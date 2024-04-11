import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("xxxx", inputs)
    try {
      const { data } = await axios.post("/api/v1/register/", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        // toast.message("User Register Successfully");
        alert("User Register Successfully")
        // console.log("sssssss")
      }
    } catch (error) {
      console.log(error);
    }finally{
      navigate("/login");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-center mb-6 font-bold">Register</h2>
          <input
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            type="text"
            className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            type="email"
            className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-2 text-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          >
            Already Registered? Please Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
