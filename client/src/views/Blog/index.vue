<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components:{
    Layout,
    BlogList,
    BlogCategory
  }
};
</script>

<style lang="less" scoped>
.blog-category-container{
  width: 250px;
  border: 1px solid #000;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding-left: 10px;
}
</style>
