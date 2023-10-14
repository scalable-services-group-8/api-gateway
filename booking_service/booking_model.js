class BookingModel {
    
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async getAllBookings() {
        try {
            const query = 'SELECT * FROM bookings';
            return await this.dbConnection.query(query);
        } catch (err) {
            throw err;
        }
    }

    async getBookingById(id) {
        try {
            const query = 'SELECT * FROM bookings WHERE id = ?';
            return await this.dbConnection.query(query, [id]);
        } catch (err) {
            throw err;
        }
    }

    async getBookingsByUserId(userId) {
        try {
            const query = 'SELECT * FROM bookings WHERE user_id = ?';
            return await this.dbConnection.query(query, [userId]);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = BookingModel;
