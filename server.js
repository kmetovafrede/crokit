const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11690148',
  password: '5NDJQLew6T',
  database: 'sql11690148'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to add a product
app.post('/api/add-product', (req, res) => {
  const { name, description, price, image_url } = req.body;

  // Execute SQL INSERT query
  const sql = `INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)`;
  connection.query(sql, [name, description, price, image_url], (err, result) => {
    if (err) {
      console.error('Error adding product to database:', err);
      res.status(500).send('Error adding product to database');
      return;
    }
    console.log('Product added to database:', name);
    res.status(200).send('Product added to database successfully');
  });
});

// Endpoint to retrieve all products
app.get('/api/products', (req, res) => {
  // Execute SQL SELECT query
  const sql = `SELECT * FROM products`;
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving products from database:', err);
      res.status(500).send('Error retrieving products from database');
      return;
    }
    res.status(200).json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
