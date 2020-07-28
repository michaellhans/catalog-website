const express = require('express')
const ErrorHandler = require('../util/MongooseErrorHandler')

const router = express.Router();

// Object
const Song = require('../../database/model/Song')

// Index
router.get('/', async (req, res) => {
  const songs = await Song.find({});
  res.send(songs);
})

// find
router.get('/nama', async (req, res) => {
  const requestQuery = req.query;
  console.log(requestQuery);
  let { nama, klasik, instrumen, jenis_aransemen } = requestQuery;
  let searchQuery = {
    nama : new RegExp(nama),
    instrumen : new RegExp(instrumen),
    klasik,
  }

  if(jenis_aransemen != null) {
    searchQuery.jenis_aransemen = jenis_aransemen
  }

  const songs = await Song.find(searchQuery)

  res.send(songs)
})

// add
router.post('/', async (req, res) => {
  const { nama, jenis_aransemen, klasik, instrumen} = req.body;
  const song = new Song({
    nama,
    jenis_aransemen,
    klasik,
    instrumen
  })
  song.save().then(
    () => res.status(201).send()
  ).catch(
    (err) => {
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err)
      })
    }
  )
})
/**
- Nama Lagu / Buku (STRING)
- Jenis Aransemen (STRING)
- Klasik / Non-Klasik (BOOLEAN)
- Instrumen (STRING)
contoh : 

"nama" : "hohoho",
"jenis_aransemen" : 123,
"klasik" : true,
"instrumen" : "PG"
 */

// delete all
router.delete('/', async (req, res) => {
  Song.remove({}).then(
    () => res.status(200).send()
  ).catch(
    (err) => {
      res.status(400).send({
        status: 400,
        body: ErrorHandler.getErrorMessage(err)
      })
    }
  );
})

// delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  Song.deleteOne({_id: id}).then(
    () => {
      console.log("Successfully removed item with id " + id)
      res.status(200).send();
    }
  ).catch(
    (err) => {

    }
  );
})

module.exports = router