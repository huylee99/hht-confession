<template>
  <span class="error">{{ error }}</span>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<style>
.error {
  display: block;
  text-align: center;
  font-style: italic;
  color: crimson;
  font-size: 1.4rem;
}
</style>
