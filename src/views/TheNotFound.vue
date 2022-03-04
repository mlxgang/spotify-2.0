<template>
  <div class="error-404">
    <h1>ОШИБКА 404</h1>
    <span>Извините, страница не найдена</span>
  </div>
</template>

<script>
export default {
  name: "TheNotFound"
}
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
}
.error-404 {
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 514px);
  height: 1000px;
  color: #fff;
  margin-left: 244px;
}
</style>