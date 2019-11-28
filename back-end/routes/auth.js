import express from 'express';
import Admin from '../models/admin';
import "@babel/polyfill";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import verifyToken from './verifyToken';
import {registerValidation, loginValidation} from '../validation';

const router = express.Router();

dotenv.config();

router.post('/register',verifyToken, async (req, res)=> {
    // Validate User
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check if the admin email already exist
    const emailExist = await Admin.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash password section
    // 1. Salting
    const salt = await bcrypt.genSalt(10);
    // 2. Hash Password
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const admin = new Admin({
        name: req.body.name,
        email : req.body.email,
        password: hashPassword
    });
    try{
        const savedAdmin = await admin.save();
        res.send(savedAdmin._id);
    } catch(err){
        res.status(400).send(err);
    }
});

router.post('/login',async (req, res) =>{
    const {error} = loginValidation(req.body);
    if(error) { 
        return res.status(400).send(error.details[0].message);
    } 
    // Checking if the email exists
    const admin = await Admin.findOne({email: req.body.email});
    if(!admin){
        return res.status(400).send('Email or password is wrong');
    } 
    // Check if password is correct
    const passwordCorrect = await bcrypt.compare(req.body.password, admin.password);
    if(!passwordCorrect){
        return res.status(400).send('Invalid credentials');
    } 

    // Create and assign token
    const token = jwt.sign({_id: admin._id},process.env.ACCESS_TOKEN_SECRET);
    res.header('auth_token', token);
    res.send('Logged In');
})



  

module.exports = router;