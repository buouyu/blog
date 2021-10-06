<template>
  <div class="about-container" v-loading="!srcLoading||loading">
    <iframe 
    class="about-content"
    v-if="src"
    v-loading="srcLoading"
    :src="src.personWeb" frameborder="0"
    @load="srcLoading=true"
    >
    </iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return {
      srcLoading:false,
    }
  },
  created(){
    this.$store.dispatch('about/fetchAbout');
    // setTimeout(() => {
    //   console.log(this.src)
    // }, 2000);
  },
  computed:mapState('setting',{
    src:'data',
    loading:'loading',
  })
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>