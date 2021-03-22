<template>
  <div class="form">
    <div class="container">
      <h2 class="form--title">Đăng nhập</h2>
      <form @submit.prevent="loginHandler">
        <div class="form-group">
          <label for="username">Email</label>
          <input type="email" name="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" name="password" v-model="password" required />
        </div>
        <span class="error" v-if="error.length">{{ error }}</span>
        <button class="btn--submit">Đăng nhập</button>
      </form>
    </div>
  </div>
</template>

<script>
import { userLogin } from '../composables/userHandler';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const { login, error } = userLogin();

    const loginHandler = async () => {
      error.value = '';
      await login(username.value, password.value);

      if (!error.value.length) {
        router.push({ name: 'Admin' });
      }
    };

    return { error, loginHandler, username, password };
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e5e6e94b;
  padding: 4rem;
  border-radius: 1rem;
}

.form--title {
  font-size: 4rem;
  color: var(--primary-color);
  text-align: center;
  padding-top: 10rem;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: bold;
}

.form-group input {
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  background: #e9eff6;
  border: none;
  outline: none;
  font-weight: bold;
  color: #888c8f;
  border-radius: 10px;
}

.btn--submit {
  display: block;
  width: 100%;
  border: none;
  background-color: #4460f1;
  font-weight: bold;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
}

.btn--submit:active,
.btn--submit:focus {
  outline: none;
}
</style>
