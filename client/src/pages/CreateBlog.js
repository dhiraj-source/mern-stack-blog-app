import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateBlog = () => {
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    });

    // Input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/blog/create-blog", {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,
            });
            if (data?.success) {
                toast.success("Blog Created");
                
            }
        } catch (error) {
            console.log(error);
        }finally{
            navigate("/my-blog");
        }
    };

    return (
        <div className="w-1/2 border-2 rounded-lg p-6 m-auto shadow-lg flex flex-col mt-10">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
                Create A Post
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="text-lg font-bold" htmlFor="title">
                    Title
                </label>
                <input
                    className="border border-gray-400 rounded-md px-4 py-2"
                    type="text"
                    id="title"
                    name="title"
                    value={inputs.title}
                    onChange={handleChange}
                    required
                />
                <label className="text-lg font-bold" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="border border-gray-400 rounded-md px-4 py-2"
                    id="description"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <label className="text-lg font-bold" htmlFor="image">
                    Image URL
                </label>
                <input
                    className="border border-gray-400 rounded-md px-4 py-2"
                    type="text"
                    id="image"
                    name="image"
                    value={inputs.image}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
