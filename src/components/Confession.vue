<template>
  <div class="item--top">
    <div class="tool">
      <i class="far fa-copy copy" @click="toClipboard(post.body)"></i>
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
import { ref } from 'vue';
import { toClipboard } from '@soerenmartius/vue3-clipboard';

export default {
  props: ['post'],
  emits: ['deletePost'],
  setup(props, context) {
    const content = ref('');
    const deleteHandler = async () => {
      await deleteCfs(props.post.id);
      context.emit('deletePost', props.post.id);
    };

    content.value = props.post.body;

    return { deleteHandler, toClipboard };
  },
};
</script>

<style scoped>
.item--title {
  font-size: 2rem;
}

.item--content {
  font-size: 1.6rem;

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
