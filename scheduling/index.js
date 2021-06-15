const cron = require('node-cron');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
require('dotenv').config();


//const connection = require('../config/connection.js');
//const sequelize = require('../config/connection');
//const Customer = require('../models/customer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

let transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
});

cron.schedule('0 19 17 * * *', function() { // 0 0 10 * * 7 this runs 10am every sunday  
  //second (optional) | minute | hour | day of month | month | day of week  
  console.log('Running Cron job');
  connection.query('SELECT * FROM customer', (err, res) => {
    if (err) throw err;
    res.forEach(({ first_name, email }) => {
      let messageOptions = {
        from: 'automatemechanic@outlook.com',
        to: email,
        subject: 'Newsletter',
        text: 'Hi ' + first_name + '! This is your monthly newsletter on new cars and maintenance advice!'
      };      
      transporter.sendMail(messageOptions, function(error, info){      
        console.log('Sending email');  
        if (error) {     
          throw error;  
        } else {   
          console.log('Email successfully sent!');
        }
      }); 
    });
  }); 
});