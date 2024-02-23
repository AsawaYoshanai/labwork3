# Node.js Email Sender

This is a simple Node.js application for sending emails via Gmail using Nodemailer.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.

## Usage

1. Open `app.js` file and replace `'your_email@gmail.com'` with your Gmail email address and `'your_password'` with your Gmail password or app-specific password.
2. Modify the `sendEmail` function call with the recipient's email address, subject, and message body.
3. Run the application by executing `node app.js` in your terminal.

## Features

- Send plain text emails
- Error handling for email sending
- Allow user input for email details

## Additional Features

- [x] Explore using environmental variables for sensitive information
- [x] Implement email templates for more complex email content

## Credits

This application uses the Nodemailer library for email sending and Google's Gmail service as a main sender.
