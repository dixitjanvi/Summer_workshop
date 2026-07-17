// const User = require("../models/user.model");
// //you can write a code only on try and catch
// const registerUser = async (req, res) => {
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
// };



// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();

//         res.status(200).json({
//             message: "Users fetched successfully",
//             users
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// };



// const getUserById = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const user = await User.findById(id);

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }

//         res.status(200).json({
//             message: "User fetched successfully",
//             user
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// };




// module.exports = {
//     registerUser,
//     getAllUsers,
//     getUserById
// };


const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const config = require("../config/config");
const { default: mongoose } = require("mongoose");
const imagekit = require("../services/imagekit.service");



const registerController = async (req , res) => {
    try {

        const {username , email , password } =  req.body


        if(!username){
            return res.status(400).json({message : "username is required"})
        }
        if(!email){
            return res.status(400).json({message : "email is required"})
        }
        if(!password){
            return res.status(400).json({message : "password is required"})
        }


        let user = await  userModel.findOne({
            email : email,
        })  

        if(user){
             return res.status(400).json({message : "user allready exist"});
        }

        const hashedPass = await bcrypt.hash(password,10)
       

        user = await userModel.create({
            username,
            email,
            password : hashedPass
        })


        delete user.password
        res.status(201).json({message : "user register successfully", user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
    }
};




const loginController = async (req , res) => {
    try {

        const { email , password } =  req.body


        if(!email){
            return res.status(400).json({message : "email is required"})
        }
        if(!password){
            return res.status(400).json({message : "password is required"})
        }


        let user = await  userModel.findOne({
            email : email
        })  

        if(!user){
             return res.status(404).json({message : "invalid credential"})
        }
        
        
        const isMatch = await  bcrypt.compare(password , user.password)

        if(!isMatch){
              return res.status(400).json({message : "invalid credential"})
        }


        const token = jwt.sign({
            id : user._id,
            email : user.email,
        }, 
        config.secret_key,
    )

        // console.log(token);
        delete user._doc.password

        res.status(200).json({message : "login successfully" ,user , token})


    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
    }
}

const profileController = async (req , res ) =>{
    try {

        const userId = req.userId

        const user = await userModel.findById(userId)

        if(!user){
            return res.status(404).json({message : "user not found"})
        }

        delete user._doc.password
        res.status(200).json({message : "user profile founded" , user})

        
    } catch (error) {
         console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message}) 
    }
}

const updateController = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    console.log(req.file);

    const file = await imagekit.upload({
            file : req.file.buffer,
            fileName : new mongoose.Types.ObjectId().toString("base64"),
            isPublished : true,
            isPrivateFile : false
        }) 
    
      

    console.log(file);



  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};


module.exports = {
    registerController,
    loginController,
    profileController,
    updateController,
};