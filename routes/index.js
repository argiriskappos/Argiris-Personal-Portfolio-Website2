const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
