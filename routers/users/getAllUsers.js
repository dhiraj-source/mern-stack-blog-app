const express = require('express')
const router = express.Router()


//contollers
const GetAllUsers = require('../../controllers/users/GetAllUsers')



// user routers
router.get("/all-users", GetAllUsers)

module.exports = router