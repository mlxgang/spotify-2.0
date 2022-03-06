<template>
  <header>
    <div class="header-background" :style="{background: gradientColor, opacity: headerOpacity, transition: 'background-color 5.25s'}"></div>
    <button @click="$router.go(-1)">
      <BaseIcon class="arrow-icon" name="arrowLeft"/>
    </button>
    <button disabled @click="$router.go(1)">
      <BaseIcon class="arrow-icon disabled" name="arrowRight"/>
    </button>
    <div>
      <slot/>
    </div>
    <the-header-account/>
  </header>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import TheHeaderAccount from "./TheHeaderAccount";

export default {
  name: 'TheHeader',
  components: {
    TheHeaderAccount,
    BaseIcon
  },
  data() {
    return {}
  },
  props: {
    gradientColor: {
      type: String, default: 'rgb(0, 0, 0) ', required: false
    },
    headerOpacity: {
      type: Number, default: 0, required: true
    },
  },
  emits: ['gradientChange']
}
</script>

<style scoped>
header {
  display: grid;
  align-items: center;
  grid-template-columns: 32px 32px auto 160px;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  position: fixed;
  /*width: calc(100% - 544px);*/
  width: 100%;
}

.header-background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
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