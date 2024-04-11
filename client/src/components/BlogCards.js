import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const BlogCards = ({ title, description, time, image, username, isUser, id }) => {
    // console.log("blog",  user, user?.username)
    const navigate = useNavigate()

    // const id = useParams().id
    const handleEdit = () => {
        navigate(`/blog-details/${id}`)
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`)
            if (data?.success) {
                alert("Blog Deleted Successfully")
                window.location.reload()

            }
        } catch (error) {
            console.log(error)
        } finally {
            navigate("/my-blog")

        }
    }

    return (
        <div className='flex'>
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">

                    <div className="py-8">
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
                        {isUser && (<div className='flex gap-4 py-2 font-bold '>
                            <button onClick={handleEdit} className='hover:text-yellow-500'>Edit</button>
                            <button onClick={handleDelete} className='hover:text-red-500'>delete</button>
                        </div>)}
                        <p className="text-gray-500 text-sm">Published on <time datetime="2022-04-05">{time}</time></p>
                    </div>


                    <img src={image} alt="Featured image" className="w-full h-auto mb-8" />


                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                        <p>{description}</p>

                    </div>
                    <p className="text-gray-500 text-sm">Author : {username} </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCards
