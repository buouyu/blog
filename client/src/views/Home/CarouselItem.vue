<template>
  <div
    class="carousel-item-container"
    ref="outer"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="inner" :style="imgPosition">
      <ImageLoader
        @load="showWords"
        :placeholder="carousel.midImg"
        :src="carousel.bigImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="des" ref="des">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      desWidth: 0,
      innerSize: null,
      outerSize: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.desWidth = this.$refs.des.offsetWidth;
    this.setSize();
    this.mouseX = this.outerSize.width / 2;
    this.mouseY = this.outerSize.height / 2;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    imgPosition() {
      if (this.innerSize == null || this.outerSize == null) return;
      const extraHeight = this.outerSize.height - this.innerSize.height;
      const extraWidth = this.outerSize.width - this.innerSize.width;
      const top = (this.mouseY / this.outerSize.height) * extraHeight;
      const left = (this.mouseX / this.outerSize.width) * extraWidth;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
  },
  methods: {
    showWords() {
      const titleStyle = this.$refs.title.style;
      const desStyle = this.$refs.des.style;
      titleStyle.width = 0;
      desStyle.width = 0;
      titleStyle.opacity = 1;
      desStyle.opacity = 1;
      this.$refs.title.clientWidth;
      titleStyle.transition = "width 2s";
      desStyle.transition = "width 2s 2s";
      titleStyle.width = this.titleWidth + "px";
      desStyle.width = this.desWidth + "px";
    },
    setSize() {
      this.innerSize = {
        height: this.$refs.inner.clientHeight,
        width: this.$refs.inner.offsetWidth,
      };
      this.outerSize = {
        height: this.$refs.outer.clientHeight,
        width: this.$refs.outer.offsetWidth,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.outer.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.outerSize.width / 2;
      this.mouseY = this.outerSize.height / 2;
    },
  },
};
</script>
<style lang="less" scoped>
.carousel-item-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  .carousel-img {
    height: 110%;
    width: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s;
    // transform: translate();
    .image-loader-container {
      height: 100%;
    }
  }
  @deviation: 2px;
  .title,
  .des {
    text-shadow: 0 0 10px red;
    position: absolute;
    color: #fff;
    z-index: 1;
    left: 50px;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
  }
  @literBottom: 300px;
  .title {
    bottom: @literBottom;
    font-size: 50px;
  }
  .des {
    bottom: @literBottom - 50px;
    font-size: 30px;
  }
}
</style>