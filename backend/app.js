const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');  // Import CORS
require('dotenv').config();  // Import dotenv to use environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Use express.json() instead of body-parser
app.use(cors()); // Enable CORS for all routes

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER, // Use environment variable for security
  password: process.env.DB_PASSWORD, // Use environment variable for security
  database: process.env.DB_NAME, // Use environment variable for database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.error(err); // Log error for debugging
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length > 0) {
      // If email already exists
      
      return res.status(400).json({ message: 'Email already registered' });
    }

    try {
      // If email is not found, hash the password and insert the user
      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error(err); // Log error for debugging
            return res.status(500).json({ message: 'Error while signing up' });
          }
          return res.status(200).json({ message: 'User registered successfully' });
        }
      );
    } catch (err) {
      console.error(err); // Log error for debugging
      return res.status(500).json({ message: 'Server error' });
    }
  });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.error(err); // Log error for debugging
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  });
});


// Middleware to protect routes that require authentication
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Example of a protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
