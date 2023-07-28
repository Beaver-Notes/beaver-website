const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signup', (req, res) => {
  // Your existing signup route code
  // ...
});

// Dummy blog posts (replace this with actual data or fetch from a database)
const blogPosts = [
  {
    title: 'Blog Post 1',
    content: 'Content of Blog Post 1',
    imageUrl: 'blog-image1.jpg',
  },
  {
    title: 'Blog Post 2',
    content: 'Content of Blog Post 2',
    imageUrl: 'blog-image2.jpg',
  },
  // Add more dummy blog posts as needed
];

// Route for the blog page
app.get('/blog', (req, res) => {
  res.render('blog', { blogPosts });
});

// Route for handling search (Same as before)
app.get('/search', (req, res) => {
  // ... Search functionality ...
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
