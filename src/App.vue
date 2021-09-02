<template>
  <section class="menu mb-5">
    <nav class="navbar navbar-light">
      <div class="container">
          <button style="border-radius:0;" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i class="fas fa-list-ul" style="color:#082032;"></i>
          </button>
        <a class="navbar-brand" href="#" style="color:#082032;"></a>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Mycvf</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/profile">Profile</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/pendidikan">Pendidikan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/pengalaman">Pengalaman</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/kontak">Kontak</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/skill">Skill</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <router-view/>
  <footer class="text-center mt-5">
    <p>Created by <i class="fas fa-heart"></i> Felis</p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: transparent;
}
#nav ul li {
  background-color: #2c3e50;
}

.bg-dark3 {
    background-color: #334756;
    color: whitesmoke;
}
</style>
