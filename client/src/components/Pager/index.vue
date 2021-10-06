<template>
  <div class="pager-container" v-if="totalPage > 1">
    <a @click="handleClick(1)" :class="{ disabled: current == 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current-1)" :class="{ disabled: current == 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{ active: n == current}">{{ n }}</a>
    
    <a @click="handleClick(current+1)" :class="{ disabled: current == totalPage }">&gt;&gt;</a>
    <a @click="handleClick(totalPage)" :class="{ disabled: current == totalPage }">&gt;&gt;|</a>
  </div>
</template>
<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 10px 12px;
  a {
    margin: 0 7px;
    cursor: pointer;
    color: @primary;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
    &:not(.active):hover {
      color: @success;
    }
  }
}
</style>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    minVisible() {
      let min = Math.floor(this.current - this.visibleNumber / 2);
      min = min < 1 ? 1 : min;
      return min;
    },
    totalPage() {
      let total = this.total / this.limit;
      return Math.ceil(total);
    },
    maxVisible() {
      let max = this.minVisible + this.visibleNumber - 1;
      max = max > this.totalPage ? this.totalPage : max;
      return max;
    },
    numbers() {
      let nums = [];
      let i = 0;
      for (i = this.minVisible; i <= this.maxVisible; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      newPage = newPage < 1 ? 1 : newPage;
      newPage = newPage > this.totalPage ? this.totalPage : newPage;
      if (newPage == this.current) {
        return;
      }
      // this.$emit("pageChange", newPage);
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
