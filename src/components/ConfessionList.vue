<template>
  <ul class="cfs__items" v-if="confessions.length">
    <li class="cfs__item" v-for="post in confessions" :key="post.id">
      <Confession :post="post" @deletePost="deletePost" />
    </li>
  </ul>
  <div v-else-if="error" class="error">{{ error }}</div>
  <Spinner v-else />
</template>

<script>
import Confession from '../components/Confession';
import { getCfs } from '../composables/cfsHandler';
import Spinner from '../components/Spinner';

export default {
  components: { Confession, Spinner },

  setup() {
    const { confessions, error, getData } = getCfs();

    getData();
    const deletePost = (id) => {
      confessions.value = confessions.value.filter((post) => post.id !== id);

      if (confessions.value.length === 0) {
        error.value = 'Hiện tại không có confession nào';
      }
    };

    return { deletePost, confessions, error };
  },
};
</script>

<style scoped>
.cfs__items {
  background-color: #f4f4f6;
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.cfs__item {
  padding: 2rem;
}

.cfs__item:not(:last-of-type) {
  border-bottom: 1px solid gray;
}

.error {
  text-align: center;
  font-size: 2rem;
}
</style>
