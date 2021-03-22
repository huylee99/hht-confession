<template>
  <div class="container">
    <div class="notification">
      <h1><i class="fas fa-check"></i> Confession của bạn đã được gửi</h1>
      <div class="note">
        Kiểm tra confession của bạn đã được đăng hay chưa
        <a href="https://www.facebook.com/HoangHoaThamCfs">tại đây</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    setTimeout(() => {
      location.replace('https://www.facebook.com/HoangHoaThamCfs');
    }, 3000);
  },
};
</script>

<style scoped>
.notification {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.notification > h1 {
  font-size: 4rem;
  text-align: center;
}

.note {
  text-align: center;
  font-size: 2rem;
}

.note > a {
  color: var(--primary-color);
}

.notification > h1 > i {
  color: #27ae60;
}
</style>
