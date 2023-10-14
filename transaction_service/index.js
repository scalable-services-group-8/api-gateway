const express = require('express');
const app = express();
const Database = require('./db');
// Config
const config = require('./config');
const TransactionModel = require('./transaction_model');
const port = config.port;

const dbConnection = new Database(config.database);

app.use(express.json());

app.get('/', (req, res) => {
    res.status(403).send('Access Forbidden');
});

app.get('/transactions', async(req, res) => {
    try {
        const transactionObj = new TransactionModel(dbConnection);
        const transactions = await transactionObj.getAllTransactions();
        res.json(transactions);
    } catch (err) {
        console.error('Error fetching transactions: ' + err);
        res.status(500).json({ error: 'An error occurred while fetching transactions' });
    }
});

app.get('/transactions/:id', async(req, res) => {
    const transactionId = parseInt(req.params.id);
    try {
		const transactionObj = new TransactionModel(dbConnection);
        const transaction = await transactionObj.getTransactionById(transactionId);
		if (transaction.length === 0) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json(transaction);
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
    console.log(`Transaction Service is listening on port ${port}`);
});