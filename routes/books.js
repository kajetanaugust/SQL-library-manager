const express = require('express');
const router = express.Router();
const Book = require('../models').Book;

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET all books */
router.get('/', asyncHandler(async (req, res) => {
  const books = await Book.findAll({ order: [['createdAt', 'DESC']]});
  res.render("index", { books, title: "Books" });
}));

/* Create a new book form. */
router.get('/new', (req, res) => {
  res.render("new-book", { book: {}, title: "New Book" });
});

/* POST create book. */
router.post('/new', asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.create(req.body);
    res.redirect("/books/");
  } catch (error) {
    if(error.name === "SequelizeValidationError") { // checking the error
      book = await Book.build(req.body);
      res.render("new-book", { book, errors: error.errors, title: "New Book" })
    } else {
      throw error; // error caught in the asyncHandler's catch block
    }
  }
}));

/* Edit book form. */
router.get("/:id", asyncHandler(async(req, res) => {
  const book = await Book.findByPk(req.params.id);
  let err;
  if(book) {
    res.render("update-book", { book: book, title: book.title, h1: "Updating" });
  } else {
    err = new Error('Book Page Not Found') //create 404 status error
        err.statusCode = 404
        res.render('page-not-found')
  }
}));

/* GET individual article. */
router.get("/:id", asyncHandler(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if(book) {
    res.render("books/:id", { book: book, title: book.title });
  } else {
    res.sendStatus(404)
  }
}));

/* Update the book. */
router.post('/:id', asyncHandler(async (req, res) => {
  let book;
  try {
    book = await Book.findByPk(req.params.id);
    if(book) {
      await book.update(req.body);
      res.redirect("/books/");
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    if(error.name === "SequelizeValidationError") {
      book = await Book.build(req.body);
      book.id = req.params.id; // make sure correct article gets updated
      res.render("update-book", { book, errors: error.errors, title: "Edit Book Info" })
    } else {
      throw error;
    }
  }
}));

/* Delete individual book. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
  const book = await Book.findByPk(req.params.id)
  if(book) {
    await book.destroy();
    res.redirect("/books");
  } else {
    res.sendStatus(404);
  }
}));



module.exports = router;