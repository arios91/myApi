const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: keys.nodeMailerUser,
        pass: keys.nodeMailerPass
    },
    tls:{
        rejectUnauthorized: false
    }
});

router.post('/sendEmail', (req,res) => {
    console.log(req.body);
    let toEmail = req.body.toEmail === 'order_in' ? keys.orderInEmail : req.body.toEmail;
    let fromEmail = req.body.fromEmail === 'order_in' ? keys.orderInSender : req.body.fromEmail;

    let mailOptions = {
        from: fromEmail, // sender address
        to: toEmail, // list of receivers
        subject: req.body.subject, // Subject line
        html: req.body.emailBody // html body
    }

    sendEmail(mailOptions);
    res.end();
})

const sendEmail = (mailOptions) => {
    transporter.sendMail(mailOptions, error => {
        if (error) {
            return console.log(error);
        }else{
            console.log('sent email');
        }
    });
}

module.exports = router;