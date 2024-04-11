const userModel = require("../../models/userModel");

const GetAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            userCount: users.length,
            message: `Error in get all user`,
            success: true,
            users

        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error in get all user`,
            success: false,
            error
        })
    }
}

module.exports = GetAllUsers;