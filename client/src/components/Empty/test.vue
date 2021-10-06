<template>
<div class="wrapper">
  <Empty text="这里啥也没有"/>
</div>
</template>

<script>
import Empty from './';
export default {
    components:{
        Empty,
    }
}
</script>

<style>
div.wrapper{
    height: 500px;
    border: 3px solid black;
    margin: auto;
    position: relative;
}
</style>