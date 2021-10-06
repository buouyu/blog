<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from './';
export default {
components:{
    Contact,
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