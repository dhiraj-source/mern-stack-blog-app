const userModel = require("../../../models/userModel")
const bcrypt = require('bcrypt')

const userLogin = async(req,res)=>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(401).send({
                message: `Please provide all fields`,
                success: false,
            }) 
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).send({
                success:false,
                message:"email is not register"
            })
        }
        //password check
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send({
                success:false,
                messsage:"Invalid credential"
            })
        }
        return res.status(200).send({
            success:true,
            message:"login successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: `Error While Login`,
            success: false,
            error
        })
    }

}

module.exports = userLogin;