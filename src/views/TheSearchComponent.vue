<template>
  <div class="background">
    <the-header>
      <div class="search-box">
        <base-icon class="search-icon" name="search"/>
        <input class="search-input" placeholder="Исполнитель, трек или подкаст">
      </div>
    </the-header>
    <span class="title">
      История поиска
    </span>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';
import BaseIcon from '../components/BaseIcon.vue'

export default {
  name: 'TheSearchComponent',
  components: {
    TheHeader,
    BaseIcon,
  },
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  background-color: #121212;
}

.search-box {
  width: 360px;
  height: 35px;
  border-radius: 30px;
  background-color: #fff;
  text-align: center;
  display: flex;
  color: #818181;
}

.search-icon {
  margin-left: 10px;
  margin-top: 5px;
  width: 25px;
  height: 25px;
}

.search-input {
  width: 290px;
  margin-left: 10px;
  font-size: 14px;
  border: none;
  outline: none;
}

.title {
  font-size: 22px;
  color: #fff;
  margin-top: 45px;
  margin-left: 30px;
  margin-right: auto;
}

.title:hover {
  text-decoration: underline;
}
</style>