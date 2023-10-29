const express = require('express');
const axios = require('axios');
const app = express();
const Database = require('./db');
// Config
const config = require('./config');
const BookingModel = require('./booking_model');
const port = config.port;

const dbConnection = new Database(config.database);

app.use(express.json());

app.get('/', (req, res) => {
    res.status(403).send('Access Forbidden');
});

app.get('/bookings', async(req, res) => {
    const userId = req.query.user_id;

	const bookingObj = new BookingModel(dbConnection);
    if (userId) {
		// Fetch Booking by user ID
        const bookings = await bookingObj.getBookingsByUserId(userId);
        if (bookings.length === 0) {
            return res.status(404).json({ error: 'Bookings not found' });
        }

        try {
            const response = await axios.get(`${config.endpoints.api_gateway}/users/${userId}`);
            const userData = response.data;
			
			const finalResponse = {user: userData, bookings: bookings};
			return res.json(finalResponse)
        } catch (err) {
            console.log('Error fetching user details: ', err);
            res.status(500).json({ error: 'An error occurred while fetching user details' });
        }
    } else {
        try {
            const bookings = await bookingObj.getAllBookings();
            res.json(bookings);
        } catch (err) {
            console.error('Error fetching bookings: ' + err);
            res.status(500).json({ error: 'An error occurred while fetching bookings' });
        }
    }
});

app.get('/bookings/:id', async(req, res) => {
    const bookingId = parseInt(req.params.id);
    try {
        const bookingObj = new BookingModel(dbConnection);
        const booking = await bookingObj.getBookingById(bookingId);
        if (booking.length === 0) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
    } catch (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
    }
});

app.get('/health-check', async(req, res) => {
    console.log('Service is running');
    res.send('Ok');
});

app.listen(port, () => {
    console.log(`Booking Service is listening on port ${port}`);
});