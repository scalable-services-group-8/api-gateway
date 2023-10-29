const express = require('express');
const axios = require('axios');
const app = express();
// Config
const config = require('./config');
const port = config.port;


app.use(express.json());

app.get('/', (req, res) => {
    res.status(403).send('Access Forbidden');
});

app.get('/bookings', async(req, res) => {
    const userId = req.query.user_id;

    let url = `${config.endpoints.booking_microservice}/bookings`;
	if (userId) {
		url = `${url}?user_id=${userId}`;
    }
    try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching booking details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching booking details' });
    }
});

app.get('/bookings/:id', async(req, res) => {
    const bookingId = parseInt(req.params.id);

    let url = `${config.endpoints.booking_microservice}/bookings/${bookingId}`;
	try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching booking details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching booking details' });
    }
});

app.get('/users', async(req, res) => {
    const userId = req.query.user_id;

    let url = `${config.endpoints.user_microservice}/users`;
	try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching user details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching user details' });
    }
});

app.get('/users/:id', async(req, res) => {
    const userId = parseInt(req.params.id);

    let url = `${config.endpoints.user_microservice}/users/${userId}`;
	try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching user details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching user details' });
    }
});

app.get('/transactions', async(req, res) => {
    const transactionId = req.query.transaction_id;

    let url = `${config.endpoints.transaction_microservice}/transactions`;
	try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching transaction details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching transaction details' });
    }
});

app.get('/transactions/:id', async(req, res) => {
    const transactionId = parseInt(req.params.id);

    let url = `${config.endpoints.transaction_microservice}/transactions/${transactionId}`;
	try {
        const response = await axios.get(url);
        return res.json(response.data);
    } catch (err) {
        console.log('Error fetching transaction details: ', err);
        res.status(500).json({ error: 'An error occurred while fetching transaction details' });
    }
});

app.get('/health-check', async(req, res) => {
    console.log('Service is running');
    res.send('Ok');
});

app.listen(port, () => {
    console.log(`Api Gateway Service is listening on port ${port}`);
});