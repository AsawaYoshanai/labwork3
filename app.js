require('dotenv').config();
const nodemailer = require('nodemailer');
const readline = require('readline');
const fs = require('fs');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your SMTP server host
  port: 587, // Replace with your SMTP server port
  secure: false, // Use true if your server requires TLS encryption
  auth: {
        user: process.env.EMAIL_USERNAME, // Your Gmail email address
        pass: process.env.EMAIL_PASSWORD // Your Gmail password or app-specific password
    }
});

// Function to send email
function sendEmail(to, subject, text, media) {
    let mailOptions = {
        from: 'asawayoshanai1024@gmail.com', // Sender email address
        to: to, // Recipient email address
        subject: subject, // Email subject
        text: text, // Email body
        attachments: [] // Array to hold attachments
    };

    if (media) {
        // Check if the media file exists
        if (fs.existsSync(media)) {
            // Read the media file and add it as an attachment
            let mediaData = fs.readFileSync(media);
            mailOptions.attachments.push({
                filename: media,
                content: mediaData
            });
        } else {
            console.log('Media file not found. Email will be sent without media.');
        }
    }

    // Send email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error occurred: ', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter recipient email address: ', (to) => {
    rl.question('Enter email subject: ', (subject) => {
        rl.question('Enter email body: ', (text) => {
            rl.question('Do you want to add media? (y/n): ', (answer) => {
                // Check user's response
                if (answer.toLowerCase() === 'y') {
                    rl.question('Enter the name of the media file (from the folder of this lab work): ', (media) => {
                        // Send email with media
                        sendEmail(to, subject, text, media);
                        rl.close();
                    });
                } else {
                    // Send email without media
                    sendEmail(to, subject, text, null); // Pass null for media
                    rl.close();
                }
            });
        });
    });
});