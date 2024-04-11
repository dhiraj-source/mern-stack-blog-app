const blogModel = require("../../models/blogs/blogs");

const GetSingleBlog = async(req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id)
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: " blog not founnd"
            })
        }
        return res.status(200).send({
            success: true,
            message: "fetch single blog",
            blog
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error in get single blog`,
            success: false,
            error
        })
    }

}
module.exports = GetSingleBlog
