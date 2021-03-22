<template>
  <div class="wrapper">
    <section class="section">
      <div class="container">
        <div class="section__container">
          <div class="section__img"></div>
          <div class="section__form">
            <form @submit.prevent="submitHandler">
              <div class="form__title">
                <h1>Hoàng Hoa Thám Confession</h1>
              </div>
              <div class="form__body">
                <div class="form-group">
                  <label for="body">Nội dung</label>
                  <textarea
                    name="body"
                    v-model="body"
                    placeholder="Nội dung là gì?"
                    required
                  ></textarea>
                  <Alert v-if="error.length" :error="error" />
                </div>
                <div class="form-submit">
                  <button class="btn--submit">Gửi</button>
                </div>
                <div class="note">
                  Kiểm tra confession của bạn đã được đăng hay chưa
                  <a href="https://www.facebook.com/HoangHoaThamCfs">tại đây</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { sendCfs } from '../composables/cfsHandler';
import Alert from '../components/Alert';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  components: { Alert },
  setup() {
    const title = ref('');
    const body = ref('');
    const error = ref('');
    const router = useRouter();

    const formValidation = () => {
      if (body.value.length < 50) {
        error.value = 'Nội dung phải có ít nhất 50 kí tự';
        return false;
      }

      return true;
    };

    const submitHandler = async () => {
      error.value = '';

      if (formValidation()) {
        await sendCfs({ body: body.value });
        title.value = '';
        body.value = '';
        router.push({ name: 'Success' });
      }
    };

    return { body, error, submitHandler };
  },
};
</script>

<style scoped>
.section {
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

.section__container {
  display: grid;
  grid-template-columns: minmax(300px, 50%) 1fr;
  max-width: 800px;
  overflow: hidden;
  border-radius: 1rem;
}

.section__img {
  background-image: url('../assets/img/img.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.section__form {
  background: var(--white);
  padding: 4rem;
}

.section__form > form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.form__title {
  font-size: 2rem;
  color: var(--primary-color);
  text-align: center;
}

.form__body {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.form-group:not(:last-of-type) {
  margin-bottom: 2rem;
}

.form-group label {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group textarea {
  height: 200px;
  white-space: pre-wrap;
  margin-bottom: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}

.btn--submit {
  display: block;
  width: 100%;
  outline: none;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 10px;
  border: 2px solid var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn--submit:hover {
  background-color: var(--white);
  color: var(--primary-color);
}

.note {
  font-size: 1.6rem;
  text-align: center;
  margin-top: 2rem;
}

.note > a {
  cursor: pointer;
  color: var(--primary-color);
}

@media screen and (max-width: 760px) {
  .section__container {
    grid-template-columns: minmax(300px, 100%) 1fr;
  }
  .section__img {
    display: none;
  }
}
</style>
