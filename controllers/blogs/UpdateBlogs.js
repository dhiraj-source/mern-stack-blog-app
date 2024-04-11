const blogModel = require("../../models/blogs/blogs");

const UpdateBlogs = async (req, res) => {
try {
    const {id} =  req.params;
    // const {title , description, image} = req.body
    const  blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
    return res.status(200).send({
        success: true,
        message:"blog updated",
        blog
    })
} catch (error) {
    console.log(error)
    return res.status(500).send({
        message: `Error in update blog`,
        success: false,
        error
    })
}
}
module.exports = UpdateBlogs
