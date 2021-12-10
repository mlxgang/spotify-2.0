<template>
  <div id="side-menu">
    <side-button
        v-for="(item, index) in sideButtons"
        :key="index"
        :class="['side-menu-button', { active: currentTab === item }]"
        :name="item.name"
        :title="item.title"
        @click="$emit('changeCurrentTab', index)"
    />
  </div>
</template>

<script>
import SideButton from './SideButton.vue'

export default {
  name: 'TheSideMenu',
  components: {
    SideButton
  },
  data() {
    return {}
  },
  emits: ['changeCurrentTab'],
  props: ['sideButtons', 'currentTab']
}
</script>

<style scoped>
#side-menu {
  width: auto;
  height: 1000px;
  background-color: #030303;
  padding: 50px 12px 12px;
}

.side-menu-button {
  height: 40px;
  width: 220px;
  display: flex;
  align-items: center;
  color: #b3b3b3;
  transition: color .3s;
}

.side-menu-button:hover {
  color: #f5f5f5;
  transition: color .3s;
}

.active {
  background-color: #292929;
  color: #f5f5f5;
  border-radius: 5px
}
</style>
