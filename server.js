const Sequalize = require('sequelize');

const sequelize = new Sequalize({
    dialect: 'sqlite',
    storage: 'movies.db'
});

(async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
})();