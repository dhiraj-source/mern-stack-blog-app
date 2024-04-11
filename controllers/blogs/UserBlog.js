const userModel = require("../../models/userModel")

const UserBlogs = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.id).populate('blogs');

        if (!userBlog) {
            return res.status(404).send({
                success: false,
                message: "blogs not found with this id",
            });
        }
        return res.status(200).send({
            success: true,
            message: "user blogs",
            userBlog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "error in user blog",
            error,
        });
    }
};
module.exports = UserBlogs