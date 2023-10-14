module.exports = {
    port: 3002,
    database: {
        host: 'booking-mysql-container',
        user: 'web',
        password: 'dp7Pw9Fhr54&LjaiR',
        database: 'booking_db',
    },
	endpoints: {
		user_microservice: "http://user-microservice:3001"
	}
};