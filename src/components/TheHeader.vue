<template>
  <div class="control-buttons">
    <button @click="$router.go(-1)">
      <BaseIcon class="arrow-icon" name="arrowLeft"/>
    </button>
    <button @click="$router.go(1)">
      <BaseIcon class="arrow-icon" name="arrowRight"/>
    </button>
    <div>
      <slot/>
    </div>
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
.control-buttons {
  display: grid;
  grid-template-columns: 25px 25px auto;
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
</style>