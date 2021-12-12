<template>
  <svg
      :class="$attrs.class || 'icon'"
      stroke="currentColor"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      v-html="path"
  ></svg>
</template>

<script>
import icons from '../assets/icons.js';

export default {
  data() {
    return {
      path: icons[this.name]
    };
  },
  props: ['name']
};
</script>

<style scoped>

</style>
