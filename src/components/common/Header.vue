<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <div class="logo">Frontend <span>Challenge</span></div>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'Registrar' }" class="button is-primary">
              <strong>Cadastrar</strong>
            </router-link>
            <router-link :to="{ name: 'Login' }" class="button is-light">
              Entrar
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  padding: 15px;
}
.navbar-item img {
  max-height: unset !important;
}
.logo {
  font-family: kaushan script;
  font-size: 2rem;
  color: #333;
  span {
    color: var(--crimson);
  }
}
</style>