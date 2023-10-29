module.exports = {
    port: 3000,
	endpoints: {
		user_microservice: "http://user-microservice:3001",
        booking_microservice: "http://booking-microservice:3002",
        transaction_microservice: "http://transaction-microservice:3003"
	}
};