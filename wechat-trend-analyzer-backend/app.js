const express = require('express');
const session = require('express-session');
const cors = require('cors');        // ✅ 1️⃣ Add this
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());                     // ✅ 2️⃣ Add this before your routes

app.use(express.json());

// Session config
app.use(session({
  secret: process.env.SESSION_SECRET || "mock_secret",
  resave: false,
  saveUninitialized: true
}));

// Mount your routes
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));

// Start server
app.listen(5000, () => console.log("Mock WeChat Analytics API running on port 5000"));
