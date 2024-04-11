const mongoose  = require("mongoose")
const blogModel = require("../../models/blogs/blogs")
const userModel = require("../../models/userModel")

const CreateBlogs = async (req, res) => {
    try {
        const { title, description, image, user } = req.body

        //validation 
        if (!title || !description || !user) {
            return res.status(400).send({
                message: `Please provide all fields`,
                success: false,
            })
        }
        const exsistingUser = await userModel.findById(user)
        if (!exsistingUser) {
            return res.status(404).send({
                success: false,
                message: "unable to find user"
            })
        }
        const newBlog = await blogModel({ title, description, image ,user})
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save({ session });
        exsistingUser.blogs.push(newBlog)
        await exsistingUser.save({session})
        // await session.commitTransaction();
        // session.endSession();

        await session.commitTransaction();
        await newBlog.save();

        return res.status(201).send({
            success: true,
            message: "blog created",
            newBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error in creating blog`,
            success: false,
            error
        })
    }
}

module.exports = CreateBlogs