<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.test-container {
  width: 250px;
  height: 800px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>