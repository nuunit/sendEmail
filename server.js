const express = require('express'); 
const nodemailer = require("nodemailer")
const app = express(); 

const port = process.env.PORT || 30000; 
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "khanit05@gmail.com",
        pass: "xxxxx"
    }
});

var mailOptions = {
    from: "Khanit <khanit05@gmail.com>", 
    to: "khanit05@hotmail.com", 
    subject: "Test Number 4", // 
    text: "Sending an email via SMTP", 
    html: "<b>Test send email by khanit please ignore this email ✔</b>" 
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }
    else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});