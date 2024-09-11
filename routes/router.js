const express=require('express');
const router=express.Router();
require('dotenv').config();

const User=require('../model/userSchema');

const { body, validationResult } = require('express-validator');

router.post('/register',
[
    body('name').trim().notEmpty().withMessage('Name is required').escape(),
    body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('message').trim().notEmpty().withMessage('Message is required').escape(),
    body('num')
      .isNumeric()
      .withMessage('Phone number must be numeric')
      .isLength({ min: 10, max: 10 })
      .withMessage('Phone number must be 10 digits')
      .trim(),
  ],async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message, num } = req.body;

      const user = new User({ name, email, num, message });
      const userRegister = await user.save();

      if (userRegister) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        await client.messages.create({
          body: `Hi ${name}, your message: "${message}", email:"${email}", no:"${num}" has been received.`,
          from: process.env.TWILIO_WHATSAPP_NUMBER, 
          to: process.env.YOUR_WHATSAPP_NUMBER, 
        }).then((message) => {
          res.status(200).json({message:'Message Send Successfully'})
          console.log("Message SID: ", message.sid);  
        }).catch((err) => {
          console.error("Error sending message: ", err);  
        });
        
      }
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'Something went wrong!' });
    }
  }
);









module.exports=router;