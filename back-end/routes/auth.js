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
    // 2. Hashing
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const admin = new Admin({
        name: req.body.name,
        email : req.body.email,
        password: hashPassword
    });
    try{
        const savedAdmin = await admin.save();
        res.status(201).json({
            message: `Admin ${savedAdmin.name} already saved`
        });
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
    const userData = req.body;
    const admin = await Admin.findOne({email: userData.email},(error, admin) => {
        if(error){
            console.log(error)
        }else{
            if(!admin){
                return res.status(401).send('Email or password is invalid');
            }
        }
    }); 
    // Check if password is correct
    const passwordCorrect = await bcrypt.compare(userData.password, admin.password);
    if(!passwordCorrect){
        return res.status(400).send('Invalid credentials');
    } 
    // Create and assign token
    const token = jwt.sign({_id: admin._id, email: admin.email},
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '1h' });
    res.status(200).json({
        token: token,
        expiresIn: '3600',
        status: 'Logged In'
    });
})

// Get admin users
router.route('/all').get((req, res)=>{
    Admin.find((err, admins) =>
    {
      if (err)
        console.log(err);
      else 
        res.json(admins);
    });
  });

 // Delete admin users
 router.route('/delete/:id').get((req,res)=>{
    Admin.findByIdAndRemove({_id: req.params.id}, (err,Admin)=>{
        if(err)
          res.json(err);
        else
          res.json('Admin removed successfully!')
      });
 }) 
module.exports = router;