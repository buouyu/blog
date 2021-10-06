<template>
  <img
    :src="url"
    class="avatar-img avatar-container"
    :style="{
      height: size + 'px',
      width: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      requred: true,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>