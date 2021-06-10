const cron = require('node-cron');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'automatemechanic@outlook.com',
        pass: 'Automate123!'
    }
});


cron.schedule('1 55 21 10 * *', function() { 
    //second (optional) | minute | hour | day of month | month | day of week
    console.log('Running Cron job');

    let messageOptions = {
        from: 'automatemechanic@outlook.com',
        to: 'jessica.luff31@gmail.com',
        subject: 'Test',
        text: 'Test email 1min'
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