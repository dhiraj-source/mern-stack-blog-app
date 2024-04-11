const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')
const dotenv = require('dotenv')
const connectDB = require('./config/db/db')


const app = express()
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// env config
dotenv.config();


//route definitions
const Register = require("./routers/users/register")
const GetAllUsers = require("./routers/users/getAllUsers")
const Login = require("./routers/users/login")
const Blogs = require("./routers/blogs/blogs")
//connect database
connectDB()


//setting routes
app.use("/api/v1", GetAllUsers);
app.use("/api/v1/register", Register)
app.use("/api/v1/login", Login)
app.use("/api/v1/blog", Blogs)



// app.get("/", (req, res) => {
//     res.status(200).send({
//         "message": "Node server"
//     })
// })


//listen
let PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is runnning on port ${PORT}`)
})