<template>
  <nav class="menu-container">
    <RouterLink
      v-for="(item, i) in items"
      :exact="item.exact"
      :key="i"
      active-class="selected"
      exact-active-class=""
      :to="{ name: item.name }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以name开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
 
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");
.menu-container {
  a {
    display: flex;
    padding: 9px 15px;
    .icon {
      margin-right: 5px;
    }
    &.selected {
      background: #999;
      color: #fff;
    }
  }
}
</style>