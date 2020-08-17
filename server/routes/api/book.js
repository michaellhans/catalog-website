const express = require('express');
const ErrorHandler = require(__basedir + '/routes/util/MongooseErrorHandler');
const router = express.Router();

const Util = require('./Util');

// Object
const Book = require(__basedir + '/model/Book');

// Index
router.get('/', async (req, res) => {
  const page = req.query.page ?? 1;

  const books = await Book.paginate({}, { page, limit: Util.docsPerPage });
  res.send(books);
});

// Nama Search
router.get('/nama', async (req, res) => {
  let { nama, hardcopy, softcopy, instrumen, page } = req.query;
  let searchQuery = {
    nama: new RegExp(nama, 'i'),
    instrumen: new RegExp(instrumen, 'i'),
  };
  if (hardcopy) {
    searchQuery.hardcopy = hardcopy;
  }
  if (softcopy) {
    searchQuery.softcopy = softcopy;
  }
  const books = await Book.paginate(searchQuery, {
    page,
    limit: Util.docsPerPage,
  });

  res.send(books);
});

// Kode Search
router.get('/kode', async (req, res) => {
  let { kode, hardcopy, softcopy, instrumen, page } = req.query;
  let searchQuery = {
    kode: new RegExp(kode, 'i'),
    instrumen: new RegExp(instrumen, 'i'),
  };

  if (hardcopy) {
    searchQuery.hardcopy = hardcopy;
  }
  if (softcopy) {
    searchQuery.softcopy = softcopy;
  }

  const books = await Book.paginate(searchQuery, {
    page,
    limit: Util.docsPerPage,
  });

  res.send(books);
});

// Add
router.post('/', async (req, res) => {
  const { nama, kode, hardcopy, softcopy, instrumen } = req.body;
  const book = new Book({
    nama,
    kode,
    hardcopy,
    softcopy,
    instrumen,
  });

  book
    .save()
    .then((resp) => {
      res.status(201).send();
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err),
      });
    });
});
/**
- Nama Lagu / Buku (STRING)
- Kode Buku (STRING)
- Hardcopy (BOOLEAN)
- Softcopy (BOOLEAN)
- Instrumen (STRING)
 */

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  Book.deleteOne({ _id: id })
    .then(() => {
      console.log('Successfully removed item with id ' + id);
      res.status(200).send();
    })
    .catch((err) => console.log(err));
});

// delete all
router.delete('/', async (req, res) => {
  Book.remove({})
    .then(() => res.status(200).send())
    .catch((err) => {
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err),
      });
    });
});

module.exports = router;
