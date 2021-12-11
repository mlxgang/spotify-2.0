<template>
  <router-link :to="`/${name}`" active-class="active" class="side-menu-button">
    <base-icon :name="name" class="side-icon"/>
    <span>{{ title }}</span>
  </router-link>
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
.side-menu-button {
  height: 40px;
  width: 220px;
  display: flex;
  align-items: center;
  color: #b3b3b3;
  transition: color .3s;
  text-decoration: none;
}

.side-menu-button:hover {
  color: #f5f5f5;
  transition: color .3s;
}

.active {
  background-color: #292929;
  color: #f5f5f5;
  border-radius: 5px;
  text-decoration: none;
}
.side-icon {
  height: 25px;
  width: 25px;
  margin: 0 15px;
  color: inherit;
}

</style>