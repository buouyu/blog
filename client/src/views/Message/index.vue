<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll.js";
import * as msgApi from "@/api/message.js";
export default {
components:{
  MessageArea,
},
mixins:[fetchData({total:0,rows:[]}),mainScroll("messageContainer")],
data(){
  return {
    limit:10,
    page:1
  }
},
created(){
  this.$bus.$on('mainScroll',this.handleScroll);
},
destroyed(){
  this.$bus.$off('mainScroll',this.handleScroll);
},
computed:{
  hasMore(){
    return this.data.rows.length <this.data.total;
  }
},
methods:{
  async fetchData(){
    return msgApi.getMessage(this.page,this.limit)
  },
  handleScroll(dom){
    if(this.loading||!dom){
      return;
    };
    // console.log(dom)
    dom=dom.target;
    // console.log(dom.scrollTop)
    const range=100;
    const dec = Math.abs(dom.scrollTop+dom.clientHeight-dom.scrollHeight);
    // console.log(dec)
    if(dec<=range){
      this.fetchMore();
    }
  },
  async fetchMore(){
    if(!this.hasMore){
      return
    }
    this.isLoading=true;
    this.page++;
    const resp = await this.fetchData();
    this.total=resp.total;
    this.data.rows=this.data.rows.concat(resp.rows);
    this.isLoading=false;
  },
  async handleSubmit(data,callback){
    const resp = await msgApi.postMessage(data);
    callback("感谢你的留言");
    this.data.rows.unshift(resp);
  }
}
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>