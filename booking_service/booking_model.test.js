const BookingModel = require('./booking_model');

jest.mock('./db'); 

describe('BookingModel', () => {
    const mockQuery = jest.fn();
    const mockDb = {
        query: mockQuery,
    };

    const bookingModel = new BookingModel(mockDb);

    it('should return an array of booking', async() => {
        const expectedBookings = [
            { id: 1, user_id: 1, booking_type: 1, description: 'Flight BOM-DEL' },
            { id: 1, user_id: 2, booking_type: 2, description: 'Hotel in Delhi' },
        ];

        mockQuery.mockResolvedValue(expectedBookings);

        const booking = await bookingModel.getAllBookings();

        expect(booking).toEqual(expectedBookings);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM bookings');
    });

    it('should return a booking if booking id is provided', async() => {
        const booking_id = 2;
        const expectedBookings = { id: booking_id, user_id: 1, booking_type: 1, description: 'Flight BOM-DEL' };

        mockQuery.mockResolvedValue(expectedBookings);

        const booking = await bookingModel.getBookingById(booking_id);

        expect(booking).toEqual(expectedBookings);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM bookings WHERE id = ?', [booking_id]);
    });

    it('should return bookings of a user', async() => {
        const user_id = 2;
        const expectedBookings = [
            { id: 1, user_id, booking_type: 1, description: 'Flight BOM-DEL' },
            { id: 2, user_id, booking_type: 2, description: 'Hotel in Delhi' }
        ];

        mockQuery.mockResolvedValue(expectedBookings);

        const bookings = await bookingModel.getBookingsByUserId(user_id);

        expect(bookings).toEqual(expectedBookings);

        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM bookings WHERE user_id = ?', [user_id]);
    });
});