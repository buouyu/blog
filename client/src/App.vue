<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>
<style  lang='less' scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .site-aside-container {
    width: 220px;
    height: 100%;
    border-right: 2px solid #888;
  }
}
</style>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>


