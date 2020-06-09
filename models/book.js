'use strict';
const Sequelize = require('sequelize');
const moment = require('moment')

module.exports = (sequelize) => {
    class Book extends Sequelize.Model {}
    Book.init({
        title: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: '"Title" field is required'
                }
            }
        },
        author: {
            type: Sequelize.STRING,
            validate:{
                notEmpty: {
                    msg: '"Author" field is required'
                }
            }
        },
        genre: Sequelize.STRING,
        year: Sequelize.INTEGER
    }, { sequelize });

    return Book;
};