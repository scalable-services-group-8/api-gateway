const UserModel = require('./user_model');

jest.mock('./db'); 

describe('UserModel', () => {
    const mockQuery = jest.fn();
    const mockDb = {
        query: mockQuery,
    };

    const userModel = new UserModel(mockDb);

    it('should return an array of users', async() => {
        const expectedUsers = [
            { id: 1, fname: 'user1', lname: 'lname1', email: 'user1@example.com' },
            { id: 2, fname: 'user2', lname: 'lname2', email: 'user2@example.com' },
        ];

        mockQuery.mockResolvedValue(expectedUsers);

        const users = await userModel.getAllUsers();

        expect(users).toEqual(expectedUsers);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM users');
    });

    it('should return a user if user id is provided', async() => {
        const user_id = 2;
        const expectedUsers = { id: user_id, fname: 'user2', lname: 'lname2', email: 'user2@example.com' };

        mockQuery.mockResolvedValue(expectedUsers);

        const users = await userModel.getUserById(user_id);

        expect(users).toEqual(expectedUsers);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM users WHERE id = ?', [user_id]);
    });
});