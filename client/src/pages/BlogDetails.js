import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    // get blog details
    const getBlogDetail = async () => {
        try {
            const { data } = await axios.get(`/api/v1/blog/single-blog/${id}`);
            if (data?.success) {
                setBlog(data?.blog);
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlogDetail();
    }, [id]);

    // input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,
            });
            if (data?.success) {
                toast.success("Blog Updated");
                navigate("/my-blog");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto w-1/2 mt-10">
                <div className="border border-gray-300 rounded-lg p-6 shadow-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Update A Post
                    </h2>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-xl font-semibold text-gray-700 mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={inputs.title || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-xl font-semibold text-gray-700 mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={inputs.description || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-xl font-semibold text-gray-700 mb-2"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={inputs.image || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-warning text-white py-3 px-6 rounded-lg font-semibold text-xl transition duration-300 hover:bg-yellow-600"
                    >
                        UPDATE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogDetails;
