<template>
  <b-container>
  <form>
    <div class="form-group">
        <label>Nama Buku</label>
        <input type="email" class="form-control" id="bookName" name="bookName">
    </div>
    <div class="form-group">
        <label>Kode Buku</label>
        <input type="email" class="form-control" id="bookCode" name="bookCode">
    </div>
    <div>
        <label>Ketersediaan Buku</label><br>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="Y" name="SoftcopyCheck" id="SoftcopyCheck">
          <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="Y" name="HardcopyCheck" id="HardcopyCheck">
          <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
        </div>
    </div>
    <br>
    <div class="form-group">
        <label for="InstrumenWords">Instrumen Character</label>
        <input type="text" class="form-control" id="InstrumenWords">
        <small id="emailHelp" class="form-text text-muted">Hanya boleh diisi dengan P, G, S, B, W, s, dan p.</small>
    </div>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tambahkan!</button>
  </form>
  </b-container>
</template>