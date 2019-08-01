const Sequalize = require('sequelize');

const sequelize = new Sequalize({
    dialect: 'sqlite',
    storage: 'movies.db'
});

class Movie extends Sequalize.Model {

}
Movie.init({
    title: Sequalize.STRING
}, {sequelize});

(async () => {
    await sequelize.sync({force: true});
    try {
        const movie = await Movie.create({
            title: 'John Wick Chapter 2'
        });
        const movie2 = await Movie.create({
            title: 'The Avengers, Endgame'
        });
        console.log(movie.toJSON());
        console.log(movie2.toJSON());
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
})();