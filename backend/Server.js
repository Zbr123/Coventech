const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CoventechDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ContactForm = mongoose.model('ContactForm', {
    Name: String,
    Email: String,
    Subject: String,
    message: String,
  });

app.use(cors({ origin: 'http://localhost:3000' }));

app.options('*', cors());

app.use(bodyParser.json());

// Route to handle form submissions
app.post('/', async (req, res) => {
    try {
      const { Name, Email , Subject , message } = req.body;
  
      // Save the form data to MongoDB
      const contactEntry = new ContactForm({ Name, Email , Subject , message });
      await contactEntry.save();
  
      res.status(200).json({ success: true, message: 'Form data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });