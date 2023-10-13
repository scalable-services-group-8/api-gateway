const express = require('express');
const mysql = require('mysql');
const app = express();

const config = require('./config');

const port = config.port;

const db = mysql.createConnection(config.database);

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.status(403).send('Access Forbidden');
});

app.get('/bookings', (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/bookings/:id', (req, res) => {
  const bookingId = parseInt(req.params.id);
  db.query('SELECT * FROM bookings WHERE id = ?', [bookingId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json(results[0]);
  });
});

app.get('/health-check', (req, res) => {
  console.log('Service is running');
  res.send('Ok');
});

app.listen(port, () => {
  console.log(`Booking Service is listening on port ${port}`);
});

