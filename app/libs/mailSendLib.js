const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const { User } = require("./../models/user.model");

exports.mailSend = async (receiverId, content) => {
    try {
        let user = await User.findOne({ userId: receiverId });

        let transporter = nodemailer.createTransport({
            service: "gmail", // true for 465, false for other ports
            auth: {
                user: "ojhaa9479@gmail.com", // generated ethereal user
                pass: "password1234@" // generated ethereal password
            }
        });

        const mailOptions = {
            from: "meeting-app", // sender address
            to: `${user.email}`, // list of receivers
            subject: "Subject of your email", // Subject line
            html: `<h1>Meeting Planner</h1><h2>${content}</h2>` // plain text body
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                return err;
            } else {
                return info;
            }
        });
    } catch (error) {
        console.log(error);
    }
};
