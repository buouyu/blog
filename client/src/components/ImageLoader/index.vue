<template>
  <div class="image-loader-container">
    <img :src="placeholder" v-if="!everthingDone" class="placeholder" alt="" />
    <img
      @load="loadedEvent"
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      alt=""
    />
  </div>
</template>
<style lang="less" scoped>
@import url("~@/styles/mixin.less");
.image-loader-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      originLoaded: false,
      everthingDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    loadedEvent() {
      this.originLoaded = true;

      setTimeout(() => {
        this.everthingDone = true;
        this.$emit('load');
      }, this.duration);
    },
  },
};
</script>

