class TransactionModel {
    
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getAllTransactions() {
        try {
            const query = 'SELECT * FROM transactions';
            return await this.dbConnection.query(query);
        } catch (err) {
            throw err;
        }
    }

    async getTransactionById(id) {
        try {
            const query = 'SELECT * FROM transactions WHERE id = ?';
            return await this.dbConnection.query(query, [id]);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TransactionModel;
