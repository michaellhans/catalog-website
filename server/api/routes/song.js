const express = require('express')

const router = express.Router();

// Object
const Song = require('../../database/model/Song')

// Index
router.get('/', async (req, res) => {
  const songs = await Song.find({});
  res.send(songs);
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
        body: err._message
      })
    }
  )
})
/**
- Nama Lagu / Buku (STRING)
- Jenis Aransemen (STRING)
- Klasik / Non-Klasik (BOOLEAN)
- Instrumen (STRING)
 */

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