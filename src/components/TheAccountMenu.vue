<template>
<div class="account-menu">
  <div>Аккаунт</div>
  <div>Профиль</div>
  <div>Приватный режим</div>
  <div>Настройки</div>
  <div>Выйти</div>
</div>
</template>

<script>
export default {
  name: "TheAccountMenu"
}
</script>

<style scoped>
.account-menu {
  width: 200px;
  height: 100px;
  background: #282828;
  position: absolute;
  top: 40px;
  right: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: white;
}
</style>