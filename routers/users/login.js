const express = require('express')

//contollers
const UserLogin = require('../../controllers/users/login/userLogin')

const router = express.Router()





// user routers
router.post("/", UserLogin)

module.exports = router