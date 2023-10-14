const TransactionModel = require('./transaction_model');

jest.mock('./db'); 

describe('TransactionModel', () => {
    const mockQuery = jest.fn();
    const mockDb = {
        query: mockQuery,
    };

    const transactionModel = new TransactionModel(mockDb);

    it('should return an array of transaction', async() => {
        const expectedTransactions = [
            { id: 1, booking_id: 1, amount: 100.00, description: '' },
            { id: 2, booking_id: 2, amount: 200.00, description: '' },
        ];

        mockQuery.mockResolvedValue(expectedTransactions);

        const transactions = await transactionModel.getAllTransactions();

        expect(transactions).toEqual(expectedTransactions);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM transactions');
    });

    it('should return a transaction if transaction id is provided', async() => {
        const transaction_id = 2;
        const expectedTransactions = { id: transaction_id, booking_id: 1, amount: 100.00, description: '' };

        mockQuery.mockResolvedValue(expectedTransactions);

        const transaction = await transactionModel.getTransactionById(transaction_id);

        expect(transaction).toEqual(expectedTransactions);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM transactions WHERE id = ?', [transaction_id]);
    });
});