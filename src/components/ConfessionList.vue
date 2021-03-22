<template>
  <ul class="cfs__items" v-if="confessions.length">
    <li class="cfs__item" v-for="post in confessions" :key="post.id">
      <Confession :post="post" @deletePost="deletePost" />
    </li>
  </ul>
</template>

<script>
import Confession from '../components/Confession';
import { getCfs } from '../composables/cfsHandler';

export default {
  components: { Confession },

  setup() {
    const { confessions, error, getData } = getCfs();

    getData();
    const deletePost = (id) => {
      confessions.value = confessions.value.filter((post) => post.id !== id);
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
</style>
