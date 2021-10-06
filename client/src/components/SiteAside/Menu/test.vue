<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from './';
export default {
components:{
    Menu,
}
}
</script>

<style lang="less" scoped>
.test-container{
    height: 50vh;
    width: 200px;
    background-color: #777;
    margin: 0 200px;
    padding-top: 200px;
}
</style>