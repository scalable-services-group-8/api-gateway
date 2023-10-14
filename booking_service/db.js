const mysql = require('mysql');
const util = require('util');

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database: ' + err.stack);
                return;
            }
            console.log('Connected to the database as id ' + this.connection.threadId);
        });
        this.connection.query = util.promisify(this.connection.query);
    }

    async query(sql, values) {
        try {
            const results = await this.connection.query(sql, values);
            return results;
        } catch (err) {
            throw err;
        }
    }

    close() {
        this.connection.end();
    }
}

module.exports = Database;