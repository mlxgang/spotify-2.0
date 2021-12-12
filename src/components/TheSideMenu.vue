<template>
  <div id="side-menu">
    <div class="side-menu-button">
      <base-icon name="dots" class="side-icon"/>
    </div>
    <router-link to="/main" class="side-menu-button" active-class="active">
      <!--      <base-icon name="main" class="side-icon"/>-->
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" class="side-icon" fill="currentColor"
           viewBox="0 0 25 25">
        <path fill-rule="evenodd" d="M25 7L12 0 0 7v18h10v-8h5v8h10V7z" clip-rule="evenodd"/>
      </svg>
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
    <router-link to="/my-media" class="side-menu-button" active-class="active">
      <svg xmlns="http://www.w3.org/2000/svg" class="side-icon" fill="currentColor" viewBox="0 0 25 25">
        <path fill-rule="evenodd"
              d="M2 0a2 2 0 00-2 2v21a2 2 0 002 2h21a2 2 0 002-2V2a2 2 0 00-2-2H2zm11 7v4h4v2h-4v4h-2v-4H7v-2h4V7h2z"
              clip-rule="evenodd"/>
      </svg>
      <span>Создать плейлист</span>
    </router-link>
    <router-link to="/my-media" class="side-menu-button" active-class="active">
      <svg class="side-icon" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="25" fill="url(#paint0_linear_1_97)" rx="2"/>
        <path fill="#fff"
              d="M12.5 9.75c1.03 1.002 1.03 2.624 0 3.625a2.69 2.69 0 01-3.728 0 2.513 2.513 0 010-3.624c1.03-1.001 2.699-1.001 3.728 0z"/>
        <path fill="#fff"
              d="M16.228 9.75c1.03 1.002 1.03 2.624 0 3.625a2.69 2.69 0 01-3.728 0 2.513 2.513 0 010-3.624c1.03-1.001 2.698-1.001 3.728 0z"/>
        <path fill="#fff" d="M8.772 13.375L12.5 9.751l3.728 3.624L12.5 17l-3.728-3.625z"/>
        <defs>
          <linearGradient id="paint0_linear_1_97" x1="0" x2="25" y1="0" y2="25" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4203F4"/>
            <stop offset="1" stop-color="#C0ECD6"/>
          </linearGradient>
        </defs>
      </svg>
      <span>Любимые песни</span>
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
  padding: 10px 12px 12px;
}

.side-menu-button {
  height: 40px;
  width: 220px;
  display: flex;
  align-items: center;
  color: #b3b3b3;
  transition: color .3s;
  text-decoration: none;
  font-size: 14px;
}

.side-menu-button:hover {
  color: #f5f5f5;
  transition: color .3s;
}

.active {
  background-color: #292929;
  color: #f5f5f5;
  border-radius: 4px;
  text-decoration: none;
}

.side-icon {
  height: 25px;
  width: 25px;
  margin: 0 15px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
