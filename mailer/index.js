const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    // Gmail SMTP setup
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'onii.chan0005@gmail.com',
        pass: "fjev rwts lpoh sgpm" // Use App Password, not your regular password
      }
    });

    await transporter.sendMail({
      from: '"Vue App" <your-email@gmail.com>',
      to,
      subject,
      text,
    });

    res.send({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to send email' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
