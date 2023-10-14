const express = require('express');
const app = express();
const Database = require('./db');
// Config
const config = require('./config');
const UserModel = require('./user_model');
const port = config.port;

const dbConnection = new Database(config.database);

app.use(express.json());

app.get('/', async(req, res) => {
    res.status(403).send('Access Forbidden');
});

app.get('/users', async(req, res) => {
    try {
        const userObj = new UserModel(dbConnection);
        const users = await userObj.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users: ' + err);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
	try {
		const userObj = new UserModel(dbConnection);
        const user = await userObj.getUserById(userId);
		if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
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
    console.log(`User Service is listening on port ${port}`);
});

module.exports = app;
