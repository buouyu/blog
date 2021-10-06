<template>
  <div class="blog-category-container" v-loading="isLoading">
      <h4>文章分类</h4>
      <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import {getBlogTypes} from "@/api/blog.js";
// import Pager from "@/components/Pager";
export default {
mixins:[fetchData([])],
components:{
RightList,
},
computed:{
list(){
    const totalArticle = this.data.reduce((a,b)=>a+b.articleCount,0);
    const allArticle = [{
        name:"全部",
        id:-1,
        articleCount:totalArticle
    },
    ...this.data
    ]
    return allArticle.map((it)=>({
        ...it,
        isSelect:it.id==this.routeParams,
        aside:`${it.articleCount}篇`
    }))
},
routeParams(){
    const params = +this.$route.params.categoryId||-1;
    return params;
},
limit(){
    return +this.$route.query.limit||10;
}
},
methods:{
    async fetchData(){
        return await getBlogTypes();
    },
    handleSelect(item){
        if(item.id==this.routeParams){
            return;
        }
        const query = {
            page:1,
            limit:this.limit,
        }
        if(item.id==-1){
            this.$router.push({
                query,
                name:"Blog"
            })
        }else{
            this.$router.push({
                query,
                name:"CategoryBlog",
                params:{
                    categoryId:item.id,
                }
            })
        }
    }
}

}
</script>

<style>

</style>