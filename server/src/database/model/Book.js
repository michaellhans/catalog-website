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

import getRequiredMessage from '../util/RequiredMessage';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, getRequiredMessage("Nama buku")]
  },
  kode: {
    type: String,
    required: [true, getRequiredMessage("Nama buku")]
  },
  hard_copy: {
    type: Boolean
  },
  soft_copy: {
    type: Boolean
  },
  instrumen: {
    type: String,
    required: [true, getRequiredMessage("instrumen")]
  }
})

const Book = mongoose.model('book', bookSchema);

export default Book;