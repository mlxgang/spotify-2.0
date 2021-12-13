<template>
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
    <the-account-menu v-if="isShowAccountMenu" class="account-menu"/>
  </button>
</template>

<script>
import TheAccountMenu from "./TheAccountMenu";

export default {
  name: "TheHeaderAccount",
  components: {
    TheAccountMenu,
  },
  data() {
    return {
      isShowAccountMenu: false
    }
  },
}
</script>

<style scoped>
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
</style>