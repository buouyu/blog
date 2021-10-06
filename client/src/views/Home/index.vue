<template>
  <div class="home-container" ref="container" v-loading="isLoading" @wheel="handleWheel">
    <ul
      class="carousel-container"
      ref="carousel"
      :style="{ transform: `translateY(${changeCarouselTop}px)` }"
     @transitionend="handleTransitionend"
    >
      <li v-for="(item, i) in itemData" :key="i">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div class="arrowUp" v-if="index !== 0" @click="switchIndex(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="arrowDown"
      v-if="index !== itemData.length - 1"
      @click="switchIndex(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <div class="directionPoint">
      <ul>
        <li
          :class="{ active: i == index }"
          v-for="(item, i) in itemData"
          :key="i"
          @click="switchIndex(i)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getBanners } from "@/api/banner.js";
import Icon from "@/components/Icon";
import CarouselItem from "./CarouselItem.vue";
export default {
  data() {
    return {
      isLoading:true,
      itemData: [],
      index: 0,
      containerHeight: 0,
      switching:false
    };
  },
  components: {
    Icon,
    CarouselItem,
  },
  async created() {
    this.itemData = await getBanners();
    this.isLoading = false;
  },
  methods: {
    switchIndex(n) {
      this.index = n;
    },
    handleWheel(e){
      
      if (this.switching) {
        return;
      }
      
      if (e.deltaY < -15 && this.index > 0) {
        // 往上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 15 && this.index < this.itemData.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionend(){
      this.switching=false;
    }
  },
  mounted() {
    let container = this.$refs.container;
    this.containerHeight = container.offsetHeight;
  },
  computed: {
    changeCarouselTop() {
      return -this.index * this.containerHeight;
    },
    
    
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  width: 100%;
  // margin: 50px auto 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: relative;
  .carousel-container {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    transition: all 1.5s;
    li {
      height: 100%;
    }
  }
  .arrowUp,
  .arrowDown {
    position: absolute;
    color: red;
    font-size: 25px;
    font-weight: bold;
    left: 50%;
    transform: translateX(-50%);
    text-shadow: 0 0 3px #000;
    cursor: pointer;
  }
  @arrowP: 25px;
  @jumpP: 10px;
  .arrowUp {
    top: @arrowP;
    @keyframes upJump {
      0% {
      }
      50% {
        transform: translate(-50%, 0px - @jumpP);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
    animation: upJump 2s infinite;
  }
  .arrowDown {
    bottom: @arrowP;
    @keyframes downJump {
      0% {
      }
      50% {
        transform: translate(-50%, @jumpP);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
    animation: downJump 2s infinite;
  }
  .directionPoint {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        height: 8px;
        width: 8px;
        cursor: pointer;
        border-radius: 50%;
        background: #666;
        box-shadow: 0 0 4px #000;
        margin: 7px;
      }
      li.active {
        background-color: #fff;
      }
    }
  }
}
</style>



