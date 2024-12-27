const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Ankit@12', // Replace with your MySQL password
  database: 'user_auth',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
    process.exit(1);
  }
  console.log('Connected to the MySQL database');
});

// Route to handle signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
}
  
  // Check if user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user in the database
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
});

// Route to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: 'Please sign up first' });
    }

    const user = result[0];

    // Check if password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Successfully logged in' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
