const getRequiredMessage = require('../util/RequiredMessage').getRequiredMessage;

const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, getRequiredMessage("Nama buku")]
  },
  jenis_aransemen: {
    type: String,
    required: [true, getRequiredMessage("Nama buku")]
  },
  klasik: {
    type: Boolean,
    required: [true, getRequiredMessage('klasik')],
  },
  instrumen: {
    type: String,
    required: [true, getRequiredMessage("instrumen")],
    validate: {
      validator: function(val) {
        const re = /^(P?G?S?B?W?s?p?){1}$/g
        return re.test(val);
      },
      message: "String format for instrument is not valid"
    }
  }
})

const Song = mongoose.model('song', songSchema);

module.exports = Song;

/**
 * 2. Daftar_Lagu

| Nama Lagu | Jenis Aransemen  | Klasik    | Instrumen |
| --------- | ---------------- | --------- | --------- |
| Song Name | Aransemen ISO    | no        | GSB       |

- Nama Lagu / Buku (STRING)
- Jenis Aransemen (STRING)
- Klasik / Non-Klasik (BOOLEAN)
- Instrumen (STRING)

Jenis Aransemen terbagi menjadi 5 bagian, yaitu:<br>
- Aransemen ISO
- Aransemen Non-ISO
- Komposisi ISO
- Komposisi Non-ISO
- Job

Instrumen sendiri terdiri atas:<br>
- P = piano<br>
- G = guitar<br>
- S = string<br>
- B = brass<br>
- W = wood wind<br>
- s = saxophone<br>
- p = percussion<br>

 */