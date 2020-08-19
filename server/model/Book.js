const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const bookSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  kode: {
    type: String,
    required: true,
  },
  hardcopy: {
    type: Boolean,
    required: true,
  },
  softcopy: {
    type: Boolean,
    required: true,
  },
  instrumen: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        const re = /^(P?G?S?B?W?s?p?L?){1}$/g;
        return re.test(val);
      },
      message: 'String format for instrument is not valid',
    },
  },
});

bookSchema.plugin(mongoosePaginate);

const Book = mongoose.model('book', bookSchema);

module.exports = Book;

/**
 * ### Database for Website
Database berfungsi sebagai tempat penyimpanan informasi dalam jumlah yang besar.
 Pada kesempatan ini, Anda telah diberikan header-header sebagai atribut dalam database
yang akan Anda implementasikan. Berikut ini adalah daftar tabel dalam database:
1. Daftar_Buku

| Nama Buku | Kode Buku  | Hardcopy  | Softcopy | Instrumen |
| --------- | ---------- | --------- | -------- | --------- |
| Song Name | GSB01      | yes       | yes      | GSB       |

- Nama Lagu / Buku (STRING)
- Kode Buku (STRING)
- Hardcopy (BOOLEAN)
- Softcopy (BOOLEAN)
- Instrumen (STRING)

 */
