const blogModel = require("../../models/blogs/blogs")

const DeleteBlogs = async (req, res) => {
    try {
        const { id } = req.params;
        // const blog = await blogModel.findByIdAndDelete(id).populate("user")
        const blog = await blogModel.findByIdAndDelete(id).populate("user")

        await blog.user.blogs.pull(blog)
        await blog.user.save();
        return res.status(200).send({
            success: true,
            message: "post deleted successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error while deleteing post`,
            success: false,
            error
        })
    }
}
module.exports = DeleteBlogs
