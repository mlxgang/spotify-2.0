<template>
  <button @click="$router.push({path: `${name}`})">
    <base-icon :name="name" class="side-icon"/>
    <span>{{ title }}</span>
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: "SideButton",
  components: {
    BaseIcon
  },
  props: ['title', 'name']
}
</script>

<style scoped>
.side-icon {
  height: 25px;
  width: 25px;
  margin: 0 15px;
  color: inherit;
}

</style>