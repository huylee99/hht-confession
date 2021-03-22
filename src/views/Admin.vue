<template>
  <div class="admin-panel">
    <div class="container">
      <div class="panel__container">
        <header class="header">
          <h3>HHT Confession</h3>
          <button class="btn--logout" @click="logoutHandler">Đăng xuất</button>
        </header>
        <section class="section__cfs">
          <ConfessionList />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ConfessionList from '../components/ConfessionList';
import { userLogout } from '../composables/userHandler';

import { useRouter } from 'vue-router';
export default {
  components: { ConfessionList },
  setup() {
    const { logout } = userLogout();
    const router = useRouter();

    const logoutHandler = () => {
      logout();
      router.push({ name: 'Login' });
    };

    return { logoutHandler };
  },
};
</script>

<style scoped>
.panel__container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.header > h3 {
  font-size: 3rem;
  font-weight: 400;
  color: var(--primary-color);
}

.header .btn--logout {
  border: 1px solid var(--primary-color);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: transparent;
  font-weight: bold;
  color: var(--primary-color);
  border-radius: 2px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn--logout:active,
.btn--logout:focus {
  outline: none;
}
</style>
