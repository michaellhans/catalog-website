# Catalog Website / Book Finder Website
Catalog Finder Website created with Vue.js as Front End and Express.js as Back End

## Latar Belakang
ISO saat ini sedang memasuki periode kepengurusan yang baru, yaitu ISODUAR pada periode 2020/2021. Saat ini, Anda sebagai librarian
diminta untuk mengimplementasikan pendataan lagu dan buku dari bentuk Google Sheet menjadi bentuk website. Tujuan pembuatan Book Finder sendiri
adalah agar massa ISO dapat dengan mudah mencari lagu-lagu yang tersedia di dalam Perpustakaan ISO yang dipegang oleh Librarian. Harapan dari Book Finder
adalah agar Book Finder ini bisa terus berkembang menjadi lebih baik dari waktu ke waktu.

## Spesifikasi Project
Pada project kali ini, Anda akan mengimplementasikan suatu website yang terintegrasi dengan database sebagai penampung informasi buku atau katalog.

### Fungsionalitas Website
Berikut ini adalah fungsionalitas-fungsionalitas yang diharapkan akan ada pada Book Finder tersebut.
- <b>F1 - Search Bar
Search Bar berfungsi sebagai tempat mengisi query pencarian buku yang diinginkan.
- <b>F2 - Filter</b>
Filter berfungsi sebagai tempat untuk melakukan pencarian menggunakan filter-filter tertentu
- <b>F3 - Add New Book</b>
Add New Book berfungsi sebagai bagian dari website untuk menambahkan buku ke dalam database website.
Penambahan buku membutuhkan *key* khusus yang hanya diketahui oleh Librarian itu sendiri.

### Database for Website
Database berfungsi sebagai tempat penyimpanan informasi dalam jumlah yang besar. Pada kesempatan ini, Anda telah diberikan header-header sebagai atribut dalam database
yang akan Anda implementasikan. Berikut ini adalah header-header atribut dalam database
- Nama Lagu / Buku
- Jenis Aransemen
- Hardcopy
- Softcopy
- Instrumen

Instrumen sendiri terdiri atas:<br>
P = piano<br>
G = guitar<br>
S = string<br>
B = brass<br>
W = wood wind<br>
s = saxophone<br>
p = percussion<br>

Berikut ini adalah contoh sebuah data yang akan dimasukkan ke dalam database.
| Nama Lagu | Jenis Aransemen  | Hardcopy  | Softcopy | Instrumen |
| --------- | ---------------- | --------- | -------- | --------- |
| Song Name | Aransemen ISO    | yes       | yes      | GSBwp     |

### Framework Website
Framework yang akan digunakan dalam pembuatan website adalah Vue.js

### Deployment
Deployment Website bisa dilakukan dengan memanfaatkan free deployment server, seperti herokuapp atau netlify

## Deadline Pengerjaan
Deadline Pengerjaan Project ini selambat-lambatnya adalah akhir dari kepengurusan ISODUAR (Februari 2021)

## Referensi Project
Berikut ini adalah referensi pengerjaan project yang kiranya bermanfaat dalam pembuatan website.
1. [Learn Vue.js - Full Course for Beginners - 2019](https://www.youtube.com/watch?v=4deVCNJq3qc)
2. [Full Stack Web App using Vue.js & Express.js: Part 1 - Intro](https://www.youtube.com/watch?v=Fa4cRMaTDUI)
3. [Full Stack Web App using Vue.js & Express.js: Part 6 - Search](https://www.youtube.com/watch?v=ipYlztBRpp0)
3. [How to Deploy a Vue CLI 3 Application to Heroku](https://www.youtube.com/watch?v=yfW9knTBR90)

## Catatan
Spesifikasi website *sewaktu-waktu* dapat berubah sesuai dengan masukan dari contributor atau user.

## Akhir Kata
Akhir Kata, semoga project ini dapat terwujudkan dengan baik. Amin.
