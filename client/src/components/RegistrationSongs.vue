<template>
  <b-container>
  <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Nama Lagu</label>
        <input type="email" class="form-control" id="songName" name="songName" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Jenis Aransemen</label>
        <select class="form-control" id=kind name="aransemen" width="20">
          <option value="Aransemen ISO">Aransemen ISO</option>
          <option value="Aransemen Non-ISO">Aransemen Non-ISO</option>
          <option value="Komposisi ISO">Komposisi ISO</option>
          <option value="Komposisi Non-ISO">Komposisi Non-ISO</option>
          <option value="Job">Job</option>
        </select>
    </div>
    <div>
        <label>Jenis Musik</label><br>
        <div class="form-check-inline">
            <input class="form-check-input" type="radio" name="genre" id="klasikValue" value="Klasik" checked>
            <label class="form-check-label" for="klasikValue">Klasik</label>
        </div>
        <div class="form-check-inline">
            <input class="form-check-input" type="radio" name="genre" id="nonKlasikValue" value="Non-Klasik">
            <label class="form-check-label" for="nonKlasikValue">Non-Klasik</label>
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