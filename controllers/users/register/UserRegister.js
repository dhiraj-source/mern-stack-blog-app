const userModel = require("../../../models/userModel")
const bcrypt = require("bcrypt")

const UserRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).send({
                message: `Please fill all fields`,
                success: false,
            })
        }
        //already a user

        const exsistingUser = await userModel.findOne({ email })
        if (exsistingUser) {
            return res.status(401).send({
                message: `User Already exists`,
                success: false,
            })
        }
        const hashPassword = await bcrypt.hash(password,10)
        // save new User
        const user = new userModel({ username, email, password: hashPassword })
        await user.save()
        return res.status(201).send({
            message: `New user Createdd`,
            success: true,
            user
        })


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error While registering`,
            success: false,
            error
        })
    }

}

module.exports = UserRegister;