const sql = require('mssql');

const config = {
    user: 'SA',
    password: 'papa1237892030',
    server: 'localhost',
    database: 'myDatabase'   
};

const pool = new sql.ConnectionPool(config);

async function getUserByUsernameAndPassword(username, password) {
    try {
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .input('password', sql.NVarChar, password)
            .query('SELECT * FROM Users WHERE Username = @username AND Password = @password');
        return result.recordset;
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = { getUserByUsernameAndPassword, createUser };

