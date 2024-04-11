const blogModel = require("../../models/blogs/blogs")

const GetAllBlogs = async (req, res) => {
try {
    const blogs = await blogModel.find({}).populate('user')
    if(!blogs){
        return res.status(200).send({
            success:false,
            message:"no blogs found"

        })
    }
    return res.status(200).send({
        success:true,
        blogCount: blogs.length,
        message:"all blogs lists",
        blogs
    })
} catch (error) {
    console.log(error)
    return res.status(500).send({
        message: `Error in get all blog`,
        success: false,
        error
    }) 
}
}
module.exports = GetAllBlogs
