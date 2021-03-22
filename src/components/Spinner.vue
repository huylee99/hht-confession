<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  display: block;
  width: 80px;
  height: 80px;
  margin: 10rem auto;
  border: 0.5rem solid transparent;
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
