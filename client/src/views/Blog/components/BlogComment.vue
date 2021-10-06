<template>
  <div class="blog-comment-container">
    <MessageArea 
    :list="data.rows"
    title="评论列表1"
    :subTitle="`${data.total}`"
    @submit="handleSubmit"
    :isListLoading="isLoading"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComment, postComment } from "@/api/blog.js";
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  computed:{
    hasMore(){
      return this.data.rows.length <this.data.total;
    }
  },
  created(){
    this.$bus.$on('mainScroll',this.handleScroll)
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getComment(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData,callback){
        const resp = await postComment({
            blogId:this.$route.params.is,
            ...formData
        })
        this.data.rows.unshift(resp);
        this.data.total++;
        callback('评论成功')
    },
    async fetchMore(){
      if(!this.hasMore){
        return;
      }
      this.isLoading=true;
      this.page ++;
      const resp = await this.fetchData();
      this.data.total=resp.total;
      this.data.rows=this.data.rows.concat(resp.rows);
      this.isLoading=false;
    },
    handleScroll(dom){
      if(!dom||this.isLoading){
        return;
      }
      const range = 100;
      const dec =Math.abs(dom.clientHeight+dom.scrollTop-dom.scrollHeight);
      if(dec<range){
        this.fetchMore();
      }
    }
  },
  
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>