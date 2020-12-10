const conString = {
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    server: process.env.SERVER_BD,
    database: process.env.DATABASE_BD,
    options: {
        encrypt: true,
        database: process.env.DATABASE_BD
    }
};

module.exports = conString;