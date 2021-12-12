<template>
  <div id="side-menu">
    <router-link to="/main" class="side-menu-button" active-class="active">
        <base-icon name="main" class="side-icon"/>
        <span>Главная</span>
    </router-link>
    <router-link to="/search" class="side-menu-button" active-class="active">
        <base-icon name="search" class="side-icon"/>
        <span>Поиск</span>
    </router-link>
    <router-link to="/my-media" class="side-menu-button" active-class="active">
        <base-icon name="my-media" class="side-icon"/>
        <span>Моя медиатека</span>
    </router-link>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon";

export default {
  name: 'TheSideMenu',
  components: {
    BaseIcon,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
#side-menu {
  width: auto;
  height: 908px;
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
