const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        runtime: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        isAvailableOnBluRay: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    }, { sequelize });

    return Movie;
};