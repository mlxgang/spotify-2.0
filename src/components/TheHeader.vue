<template>
  <div class="header">
    <button @click="$router.go(-1)">
      <BaseIcon class="arrow-icon" name="arrowLeft"/>
    </button>
    <button @click="$router.go(1)">
      <BaseIcon class="arrow-icon" name="arrowRight"/>
    </button>
    <div>
      <slot/>
    </div>
    <button class="account">
      <div class="account-avatar"></div>
      <span class="account-nickname">mlxgang</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-down" viewBox="0 0 20 12">
        <path fill="#fff" d="M10 12L.474 0h19.052L10 12z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'TheHeader',
  components: {
    BaseIcon
  }
}
</script>

<style scoped>
.header {
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
  background: #000000;
  width: 130px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.account:hover {
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
</style>