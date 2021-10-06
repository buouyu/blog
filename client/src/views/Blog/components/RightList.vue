<template>
  <ul class="right-list-container">
      <li v-for="(item,i) in list" :key="i" @click="handleClick(item)" >
          <span class="title" :class="{active:item.isSelect}">{{item.name}}</span>
          <span class="des" :class="{active:item.isSelect}">{{item.aside}}</span>
          <RightList :list='item.children' @select="handleClick" />
      </li>
  </ul>
</template>

<script>
export default {
name: "RightList",
props:{
    list:{
        type:Array,
        default:()=>[]
    }
},
methods:{
    handleClick(item){
        this.$emit('select',item);
    }
}
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .des{
      font-size: 12px;
      color: #aaa;
      display: inline-block;
      margin-left: 30px;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>