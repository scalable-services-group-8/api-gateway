class UserModel {
    
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getAllUsers() {
        try {
            const query = 'SELECT * FROM users';
            return await this.dbConnection.query(query);
        } catch (err) {
            throw err;
        }
    }

    async getUserById(userId) {
        try {
            const query = 'SELECT * FROM users WHERE id = ?';
            return await this.dbConnection.query(query, [userId]);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserModel;
