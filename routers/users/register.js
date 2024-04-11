const express = require('express')
const router = express.Router()


//contollers
const UserRegister = require('../../controllers/users/register/UserRegister')


// user routers
router.post("/", UserRegister)

module.exports = router