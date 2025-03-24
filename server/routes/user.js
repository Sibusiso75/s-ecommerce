const express = require("express")
const router = express.Router()
const User = require("../models/User")
const {verifyTokenAndAuthorization,verifyAdmin} = require("./verifyToken")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const Token = require("../../models/JobSeeker/token")
const Feedback = require("../../models/JobSeeker/Feedback")

router.post("/register", async (req, res)=>{
    try {
      
        const {username,email,password,town,province,postalCode
        }=req.body;
    const user = await User.findOne({email})
    
          if(user){
              return res.json({message:"User already exists"})
          } 
          const hashedPassword = await bcrypt.hash(password,10)
          
          const newUser =   new User({
           username, email,password:hashedPassword,town,province,postalCode,
                
           })

        const accessToken = jwt.sign({
          id:newUser._id, email:newUser.email,
          username:newUser.username,
          isAdmin:newUser.isAdmin
        }, process.env.KEY)
      // const encodedToken = encodeURIComponent(accessToken).replace(/\./g, "%2E")
         

        const token = new Token({
          userId:newUser._id,
          token:accessToken
        })

        await token.save()
        await newUser.save()
  return res.json({status:true, message:"account created successfully"})
}
catch (error) {
   return res.json(error)
}
})

router.get("/:id/verify/:token", async (req, res)=>{
    try {
      const user = await User.findOne({_id:req.params.id})
      if(!user){
        return res.json({message:"Invalid link"})
      }
      const token = await Token.findOne({
        userId:user._id,
        token:req.params.token
      })
      // const encodedToken = encodeURIComponent(accessToken).replace(/\./g, "%2E")
  
       if(!token){
        return res.json({message:"Invalid link"})
       }
       await User.updateOne({_id:user._id, verified:true})
       await token.remove()
      return res.json({status:true, message:"Email verified successfully"})
    } catch (error) {
      return res.json(error)
    }
  })

  router.post("/login", async(req, res)=>{
    try {
      const {email ,password} =req.body;
      const user= await User.findOne({email})
      if(email==""){
        return res.json({message:"Email is required"})
      }
      if(password==""){
        return res.json({message:"Password is required"})
      }
       if(!user){
        return res.json({message:`Your  email  is invalid`})
       }
  
       const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
           return res.json({message:"Password is incorrect. Please try again."})
        }
        // if(!user.verified){
        //   let token = await Token.findOne({userId:user._id})
        //    if(!token){
        //     const accessToken = jwt.sign({
        //       id:user._id, email:user.email, isAdmin:user.isAdmin,
        //     }, process.env.KEY, {expiresIn:"5m"})
            
        //     token = await new Token({
        //       userId:user._id, token:accessToken
        //     }).save()
          
        //     var transporter = nodemailer.createTransport({
        //       service:"gmail",
        //       auth:{
        //         user:process.env.EMAIL, pass:process.env.PASS}
        //     })
        // const encodedToken = encodeURIComponent(accessToken).replace(/\./g, "%2E")
  
        //     var mailOptions = {
        //       from:process.env.MYEMAIL,
        //       to:email,
        //       subject:"Verify account",
        //       html:`<p>Hi ${user.username}</p>
        //       <p>To reset your password, click the link below.</p>       
        //       <a href=${process.env.BASE_URL}/users/${user._id}/verify/${encodedToken}>
        //       Verify account link</a>
        //       `
        //     }
        //     transporter.sendMail(mailOptions, function(error, info){
        //       if(error){
        //         console.log(error)
        //       }
        //       else{
        //        return res.json({emailSent:true, message:"Email sent"})
        //       }
        //     })        }
        // }
        const token = jwt.sign({
          id:user._id,
          email:user.email,
          username:user.username,
          isAdmin:user.isAdmin
  
        }, process.env.KEY)
        res.cookie("token", token, {httpOnly:true, sameSite:'none'})
        return res.json({status:true, message:"Successfully logged in"})
    } catch (error) {
      return res.json(error)
    }
      })

      router.post("/forgot-password", async (req, res)=>{
        const {email} = req.body;  
        try {
          const user =  await User.findOne({email})
          if(!user){
            return res.json({message:"user is not registered"}) 
          }
          const token = jwt.sign({id:user._id}, process.env.KEY, {expiresIn:"5m"})
          var transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
              user:process.env.EMAIL, pass:process.env.PASS}
          })
          const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E")
          
          var mailOptions = {
            from:process.env.MYEMAIL,
            to:email,
            subject:"Reset password",
            html:`<p>Hi ${user.username}</p>
            <p>To reset your password, click the link below.</p>       
            <a href="https://jobsearchapp-aaoq.onrender.com/resetPassword/${encodedToken}">
            Reset password link</a>
            `
          }
          transporter.sendMail(mailOptions, function(error, info){
            if(error){
              console.log(error)
            }
            else{
             return res.json({status:true, message:"Email sent"})
            }
          })
        } catch (error) {
          console.log(error)
        }
      })

      router.post("/reset-password/:token", async (req, res)=>{
        try {
          const {password}= req.body;
          const {token} = req.params;
          
          if(!token){
            res.json({message:"Token is invalid"})
          }
          const decoded = jwt.verify(token, process.env.KEY)
          const id = decoded.id;
          const hashedPassword = await bcrypt.hash(password,10)
          await User.findByIdAndUpdate({_id:id}, {password:hashedPassword})
        } catch (error) {
          console.log(error)
        }
      })

      

  
module.exports =router