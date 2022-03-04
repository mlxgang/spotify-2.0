<template>
  <div :style="{background: gradientColor + headerOpacity + ')'}" class="header-background">
    <button @click="$router.go(-1)">
      <BaseIcon class="arrow-icon" name="arrowLeft"/>
    </button>
    <button disabled @click="$router.go(1)">
      <BaseIcon class="arrow-icon disabled" name="arrowRight"/>
    </button>
    <div color="white">
      <slot/>
    </div>
    <the-header-account/>
  </div>
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
  computed: {
  },
  props: {
    gradientColor: {
      type: String, required: true
    },
    headerOpacity: {
      type: Number, required: true
    },
  }
}
</script>

<style scoped>
.header-background {
  display: grid;
  align-items: center;
  grid-template-columns: 32px 32px auto 160px;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  position: fixed;
  width: calc(100% - 544px);
  background: #000;
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