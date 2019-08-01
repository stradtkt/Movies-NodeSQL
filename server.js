const db = require('./db');
const { Movie } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });
  try {
    const movie = await Movie.create({
        title: 'John Wick Chapter 2'
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
        title: 'The Avengers, Endgame'
    });
    console.log(movie2.toJSON());
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();