import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlices";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/login", {
                email: inputs.email,
                password: inputs.password,
            });
            if (data.success) {
                localStorage.setItem("userId", data?.user._id)
                // localStorage.setItem("userId", data?.user._id);
                dispatch(login());
                // toast.success("User login Successfully");
                // console.log("aaaa", data)
                // console.log("sss", data?.user)


                alert("Login successful")
            }
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-extrabold mb-6">Login</h2>

                <input
                    className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    type="email"
                    placeholder="Email"
                    value={inputs.email}
                    name="email"
                    onChange={handleChange}
                    required
                />

                <input
                    className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    name="password"
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="w-full py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                >
                    Submit
                </button>

                <button
                    onClick={() => navigate("/register")}
                    className="w-full py-2 text-blue-500 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                >
                    Not a user ? Please Register
                </button>
            </div>
        </form>
    );
};

export default Login;
