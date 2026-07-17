// const express = require("express");
// const User = require("../models/user.model");

// const router = express.Router()

// // router.get("/register",(req, res)=>{

// //     router.post("/register",(req, res)=>{
// //     console.log(req.query);
// //     console.log(req.body);
// //     res.send("Registerd successfully!!!!!")
// // })

// router.post("/register", async (req, res) => {
//     try {
//         const user = await User.create(req.body);

//         res.status(201).json({
//             message: "User Registered Successfully",
//             user
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// });


// module.exports = router ;


const express = require("express");
const userModel = require("../models/user.model")
const userControllers = require("../controllers/user.controller")
const protectedRoute = require("../middleware/protected.middleware")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })



// const {
//     registerUser,
//     getAllUsers,
//     getUserById
// } = require("../controllers/user.controller");

const router = express.Router();

// router.post("/register", registerUser);
// router.get("/users", getAllUsers);
// router.get("/users/:id", getUserById);


router.post("/register", userControllers.registerController)
router.post("/login", userControllers.loginController)
router.get("/profile", protectedRoute,  userControllers.profileController)
router.put("/update/:userId",protectedRoute ,upload.single("avatar") , userControllers.updateController)


module.exports = router;



// const express = require("express");
// const userModel = require("../models/model");

// const router = express.Router();

// router.post("/register", async (req, res) => {
//     try {
//         console.log(req.query);
//         console.log(req.body);

//         const { username, email, password } = req.body;

//         const user = await userModel.create({ // we use awit here just to wait for the database creation .. if we use await then the function must async   
//             username,
//             email,
//             password
//         });

//         res.status(201).json()({
//             message: "User registered successfully",
//             user
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json()({
//             message: err.message
//         });
//     }
// });

// module.exports = router;