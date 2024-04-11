import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCards from '../components/BlogCards'
import { Link } from 'react-router-dom'

const UserBlogs = () => {
  const [blog, setBlog] = useState([])

  const getUserBlog = async () => {
    try {
      const id = localStorage.getItem("userId")
      const { data } = await axios(`/api/v1/blog/user-blog/${id}`)
      if (data?.success) {
        setBlog(data?.userBlog?.blogs)
        console.log("xxxxx", data?.userBlog)

        console.log("what will be the data", data?.userBlog)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserBlog()
  }, [])

  return (
    <section>
      {blog && blog.length > 0 ? (blog.map((blog) => (
        <BlogCards
          id={blog._id}
          isUser={true}
          tittle={blog.tittle}
          description={blog.description}
          image={blog.image}
          username={`Unique User ID: ${blog.user}`}
          time={blog.createdAt}
        />
      ))) : (<><div className='flex justify-center items-center space-y-20 flex-col m-10 '><div className='font-bold text-7xl text-cyan-800'>You haven't created any blog </div><Link to={"/create-blog"} className=' font-bold hover:text-green-600'>CLick to Post BLOG</Link></div> </>)}


    </section>
  )
}

export default UserBlogs
