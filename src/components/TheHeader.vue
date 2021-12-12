<template>
  <header>
    <button @click="$router.go(-1)">
      <BaseIcon class="arrow-icon" name="arrowLeft"/>
    </button>
    <button @click="$router.go(1)">
      <BaseIcon class="arrow-icon" name="arrowRight"/>
    </button>
    <div>
      <slot/>
    </div>
    <button
        class="account"
        :class="{accountMenuActive: isShowAccountMenu }"
        @click="isShowAccountMenu = !isShowAccountMenu"
    >
      <div class="account-avatar"></div>
      <span class="account-nickname">mlxgang</span>
      <template v-if="!isShowAccountMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-down" viewBox="0 0 20 12">
          <path fill="#fff" d="M10 12L.474 0h19.052L10 12z"/>
        </svg>
      </template>
      <template v-if="isShowAccountMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-up" viewBox="0 0 20 12">
          <path fill="#fff" d="M10 12L.474 0h19.052L10 12z"/>
        </svg>
      </template>
      <div v-if="isShowAccountMenu" class="account-menu">
        <div>Аккаунт</div>
        <div>Профиль</div>
        <div>Приватный режим</div>
        <div>Настройки</div>
        <div>Выйти</div>
      </div>
    </button>

  </header>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'TheHeader',
  components: {
    BaseIcon
  },
  data() {
    return {
      isShowAccountMenu: false
    }
  },
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 32px 32px auto 160px;
  gap: 20px;
  padding-top: 15px;
  padding-left: 30px;
}

.arrow-icon {
  width: 22px;
  height: 22px;
  padding: 5px;
  color: #fff;
  background: #000;
  border-radius: 50%;
}

.disabled {
  color: #a1a1a1;
  background: #151515;
  cursor: not-allowed;
}

.account {
  background: rgba(0, 0, 0, 0.7);
  width: 130px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.account:hover {
  background: #282828;
}

.accountMenuActive {
  background: #282828;
}

.account-avatar {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: red;
  margin: 3px;
}

.account-nickname {
  color: #ffffff;
  font-size: 14px;
  margin-right: auto;
  margin-left: 5px;
}

.stroke-down {
  width: 12px;
  height: 7px;
  padding-right: 12px;
}

.stroke-up {
  width: 12px;
  height: 7px;
  padding-left: 12px;
  transform: rotate(180deg);
}

.account-menu {
  width: 200px;
  height: 100px;
  background: #282828;
  position: absolute;
  top: 35px;
  right: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: white;
}
</style>