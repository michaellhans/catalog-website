<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Book Finder</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <div class="navbar-nav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/book">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/song">Songs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/add">Add</a>
            </li>
          </ul>
        </div>
        <div class="navbar-nav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://www.instagram.com/itborchestra/">Instagram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://www.youtube.com/user/mediaISO">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="ml-auto">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/login">Login</router-link>
          <router-link class="nav-link" to="/register">Add Account</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>