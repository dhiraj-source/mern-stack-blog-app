const express = require("express")
const router = express.Router()

//controller 
const GetAllBlogs = require("../../controllers/blogs/GetAllBlogs")
const CreateBlogs = require("../../controllers/blogs/CreateBlogs")
const UpdateBlogs = require("../../controllers/blogs/UpdateBlogs")
const DeleteBlogs = require("../../controllers/blogs/DeleteBlogs")
const GetSingleBlog = require("../../controllers/blogs/GetSingleBlog")
const UserBlogs = require("../../controllers/blogs/UserBlog")




//routers

// GET || ALL BLOGS
router.get("/all-blogs", GetAllBlogs)

//GET || SINGLE BLOG
router.get("/single-blog/:id", GetSingleBlog)

// POST || CREATE BLOGS
router.post("/create-blog", CreateBlogs)

// PUT || UPDATE BLOGS
router.put("/update-blog/:id", UpdateBlogs)

// DELETE || DELETE BLOGS
router.delete("/delete-blog/:id", DeleteBlogs)

//GET || user BLog
router.get("/user-blog/:id", UserBlogs)

module.exports = router