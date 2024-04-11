import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCards from '../components/BlogCards'

const Blogs = () => {
  const [blog, setBlog] = useState([])

  const getAllBlogs = async () => {
    try {
      const { data } = await axios(`/api/v1/blog/all-blogs`)
      if (data?.blogs) {
        setBlog(data?.blogs)
        // console.log("idddd", data?.blogs[0]?.user)
        console.log("wwwww", data?.blogs[0]?.user?._id)


      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllBlogs()
  }, [])
  console.log("aaaa", blog[0]?._id)

  // console.log("mmm", typeof (blog))
  return (
    <div className='flex'>
      {blog && blog.map((blog) => (
        <BlogCards
          id={blog?._id}
          isUser={localStorage.getItem('userId') === blog?.user?._id}
          title={blog?.tittle}
          description={blog?.description}
          image={blog.image}
          username={blog?.user?.username}
          time={blog?.createdAt}
        />
      ))}
      {/* {blog.length > 0 ? <BlogCards blog = {blog} /> :<><div className=' w-auto'><div className='flex justify-center text-7xl py-52 font-extrabold'><h1>No Blog </h1></div></div></>} */}
    </div>
  )
}

export default Blogs
