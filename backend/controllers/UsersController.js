import { PrismaClient } from "@prisma/client"

import bcrypt from "bcrypt";
import { request } from "express";
import jwt from "jsonwebtoken"
const prisma = new PrismaClient();


export const getUsers = async (req,res) =>{
    try {
        const response = await prisma.users.findMany({
            select: {
              name: true,
              email: true
            }
          });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}


export const registerUser = async (req,res) =>{
    const {name,email,password,confPassword} = req.body;
    if (password !== confPassword) {
        return res.status(400).json({msg:'password tidak sama'});
    }

    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password,salt);

    try {
        const user = await prisma.users.create({
            data:{
                name:name,
                email:email,
                password:hashpassword,
                refresh_token:''
            }

        });
        res.status(201).json({msg:"resgistrasi berhasil"});
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}

export const loginUser = async (req,res) =>{
    try {
        const user = await prisma.users.findMany({
            where:{
                email: req.body.email
            }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) {
            return  res.status(400).json({msg: "password salah"});
        }
        // res.status(200).json({user});

       

        const userid = user[0].id
        const name =  user[0].name
        const email =  user[0].email

        const accessToken = jwt.sign({userid,name,email},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        })

        const refreshToken = jwt.sign({userid,name,email},process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        })

        await prisma.users.update({
            where :{
                id:userid
            },
            data:{
                refresh_token:refreshToken
            }
        
        })

        res.cookie('refreshToken', refreshToken,{
            httpOnly:true,
            maxAge:24 * 60 * 60 * 1000
            // secure:true
        });

        res.status(200).json({accessToken});
    } catch (error) {
        res.status(404).json({msg:"email tidak ditemukan"});
    }
}
