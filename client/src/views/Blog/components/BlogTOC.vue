<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import {debounce} from "@/utils";
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  computed: {
    toWithSelect() {
      const getTOC = (toc=[]) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor == this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.list);
    },
    doms(){
      const doms =[];
      const addDoms = (toc=[])=>{
        for(const t of toc){
          doms.push(document.getElementById(t.anchor));
          if(t.children&&t.children.length){
            addDoms(t.children)
          }
        }
      }
      addDoms(this.list)
      return doms;
    }
  },
  created(){
    this.setSelectDebounce = debounce(this.setSelect,50);
    this.$bus.$on('mainScroll',this.setSelectDebounce);
  },
  destroyed(){
    this.$bus.$off("mainScroll",this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(){
      const range =200;
      this.activeAnchor="";
      for(const dom of this.doms){
        if(!dom){
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if(top>0&&top<range){
          this.activeAnchor=dom.id;
        }else if(top>range){
          return;
        }else{
          this.activeAnchor=dom.id;
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>>
