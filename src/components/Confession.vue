<template>
  <div class="item--top">
    <h3 class="item--title">
      {{ post.title }}
    </h3>
    <div class="tool">
      <i class="far fa-copy copy"></i>
      <i class="far fa-trash-alt delete" @click="deleteHandler"></i>
    </div>
  </div>
  <div class="item--body">
    <p class="item--content">
      {{ post.body }}
    </p>
  </div>
</template>

<script>
import { deleteCfs } from '../composables/cfsHandler';

export default {
  props: ['post'],
  emits: ['deletePost'],
  setup(props, context) {
    const deleteHandler = async () => {
      await deleteCfs(props.post.id);

      context.emit('deletePost', props.post.id);
    };

    return { deleteHandler };
  },
};
</script>

<style scoped>
.item--title {
  font-size: 2rem;
}

.item--content {
  font-size: 1.6rem;
  text-align: justify;
  white-space: pre-wrap;
  word-break: break-word;
}

.item--top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.tool > i {
  font-size: 2rem;
  cursor: pointer;
}

.copy {
  margin-right: 1.5rem;
}

.copy:hover {
  color: var(--primary-color);
}

.delete:hover {
  color: crimson;
}
</style>
