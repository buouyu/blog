<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :list="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import {titleController} from "@/utils";
export default {
  mixins: [fetchData(null),mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      
      let resp = await getBlog(this.$route.params.id);
      // resp = null;
      if(!resp){
        this.$router.push("/404")
        return;
      }
      titleController.setRouteTitle(resp.title)
      return resp;

    },
    // handleScroll() {
    //   this.$bus.$emit("mainScroll",this.$refs.mainContainer);
    // },
    // handleSetScroll(scrollTop=0){
    //   this.$refs.mainContainer.scrollTop=scrollTop;
    // }
  },
  // mounted() {
  //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  //   this.$bus.$on('setMainScroll',this.handleSetScroll);
  // },
  // beforeDestroy() {
  //   this.$bus.$emit('mainScroll')
  //   this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  //   this.$bus.$off('setMainScroll',this.handleSetScroll);
  // },
};
</script>
<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>