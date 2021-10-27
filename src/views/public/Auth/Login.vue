<template>
  <div class="form">
    <div class="grid">
      <i class="fas fa-user-lock"></i>
      <strong>Acesso sua conta</strong>
    </div>
    <form @submit.prevent="login">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            v-model="user.email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            v-model="user.password"
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button type="submit" class="button is-success">Login</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      localStorage.setItem('token', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background: #ccc;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
form {
  background: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 10px;
  align-items: center;
  margin: 15px;
  i {
    font-size: 2rem;
  }
}
</style>
