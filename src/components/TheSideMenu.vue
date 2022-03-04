<template>
  <div id="side-menu">
    <button class="side-menu-button">
      <base-icon class="side-icon" name="dots"/>
    </button>
    <div class="side-main-menu">
      <router-link active-class="active" class="side-menu-button" to="/main">
        <svg class="side-icon" fill="currentColor" height="21" viewBox="0 0 25 25" width="21"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M25 7L12 0 0 7v18h10v-8h5v8h10V7z" fill-rule="evenodd"/>
        </svg>
        <span>Главная</span>
      </router-link>
      <router-link active-class="active" class="side-menu-button" to="/search">
        <base-icon class="side-icon" name="search"/>
        <span>Поиск</span>
      </router-link>
      <router-link active-class="active" class="side-menu-button" to="/my-media">
        <base-icon class="side-icon" name="my-media"/>
        <span>Моя медиатека</span>
      </router-link>
    </div>
    <div class="side-second-menu">
      <router-link active-class="active" class="side-menu-button" to="/">
        <svg class="side-icon" fill="currentColor" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M2 0a2 2 0 00-2 2v21a2 2 0 002 2h21a2 2 0 002-2V2a2 2 0 00-2-2H2zm11 7v4h4v2h-4v4h-2v-4H7v-2h4V7h2z"
                fill-rule="evenodd"/>
        </svg>
        <span>Создать плейлист</span>
      </router-link>
      <router-link active-class="active" class="side-menu-button" to="/">
        <svg class="side-icon" fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <rect fill="url(#paint0_linear_1_97)" height="25" rx="2" width="25"/>
          <path
              d="M12.5 9.75c1.03 1.002 1.03 2.624 0 3.625a2.69 2.69 0 01-3.728 0 2.513 2.513 0 010-3.624c1.03-1.001 2.699-1.001 3.728 0z"
              fill="#fff"/>
          <path
              d="M16.228 9.75c1.03 1.002 1.03 2.624 0 3.625a2.69 2.69 0 01-3.728 0 2.513 2.513 0 010-3.624c1.03-1.001 2.698-1.001 3.728 0z"
              fill="#fff"/>
          <path d="M8.772 13.375L12.5 9.751l3.728 3.624L12.5 17l-3.728-3.625z" fill="#fff"/>
          <defs>
            <linearGradient id="paint0_linear_1_97" gradientUnits="userSpaceOnUse" x1="0" x2="25" y1="0" y2="25">
              <stop stop-color="#4203F4"/>
              <stop offset="1" stop-color="#C0ECD6"/>
            </linearGradient>
          </defs>
        </svg>
        <span>Любимые песни</span>
      </router-link>
    </div>
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
  width: 220px;
  height: 100%;
  background-color: #030303;
  padding: 10px 12px 12px;
  position: fixed;
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

.side-main-menu {
  margin-bottom: 25px;
}

.side-second-menu {

}
</style>
