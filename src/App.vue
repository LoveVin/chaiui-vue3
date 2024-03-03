<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { router } from './router';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 500 ? false : true)
const toggleAsideVisible = () => {
  asideVisible.value = !asideVisible.value
}
provide("asideVisibleObj", {
  asideVisible,
  toggleAsideVisible
});

router.afterEach(() => {
  if(width <= 500) {
    asideVisible.value = false;
  }
})
</script>

<style lang="scss" scoped>
body {
  background: #f8f6e8;
}
</style>
