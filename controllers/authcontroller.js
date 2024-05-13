import pkg from 'pg';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const {Client} =pkg;
const prisma=new PrismaClient();
export const getuser=async(req,res)=>{
console.log("inside getuserroute");
const {fullname, Email,Password,Confirm_password}=req.body;
if(Password!=Confirm_password){
    return res.status(400).json({
        message:"Password do not match"
    });
}
if(!Email){
    console.log(req.body);
    return res.status(400).json({
        "error":"Email is required"
    });
}
let user=await prisma.signup.findFirst({
    where:{
        Email:Email,
    },
});
if(!user){
if(!fullname||!Password||!Confirm_password){
    return res.status(400).json({"error":'Allfeilds are required'});
}
const hashedpassword=await bcrypt.hash(Password,10);
user =await prisma.signup.create({
 data:{
     fullname,
     Email,
     Password:hashedpassword
 }
});
}
res.status(200).json({
    message:"User has been created",
    user:{
        id:user.userid,
        fullname:user.fullname,
        Email:user.Email
    }
});

};
export const updateuser=async(req,res)=>{
    console.log("You are inside updateuser");
    const {Email,Password,Confirm_password}=req.body;
    if(Password!=Confirm_password){
        return res.status(400).json({
            "error":'Password do not match'
        })
    }
    const user =await prisma.signup.findUnique({
        where:{
            Email,
        }
    });
    if(!user){
        return res.send("user not found");
    }
    const hashedpassword=await bcrypt.hash(Password,10);
    const updateduser =await prisma.signup.update({
       where:{userid:user.userid},
       data:{
        Password:hashedpassword
       }
    });
    res.status(200).json(
        updateduser);
}

export const getlogin=async(req,res)=>{
    console.log("you are in loginget");
    const {fullname,Email,Password}=req.body;
    if(!Email||!fullname||!Password){
        return res.status(400).json({
            "error":'All feilds are required',
        });
    }
    const user=await prisma.signup.findUnique({
        where:{
        fullname:fullname,
        Email:Email
        }
    });
    if(!user){
        console.log("User not found");
       return res.redirect(300,'/signup')
    }

    res.redirect(200, '/home');
}
export const gethome =async(req,res)=>{
    res.send("Homepage")
}
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
    });
  };

  