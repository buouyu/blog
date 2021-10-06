<template>
  <div class="site-aside-container">
      <template v-if="data">
      <Avatar :url='data.avatar' :size="110" />
      <h5 v-show="user">{{data.siteTitle}}</h5>
      <h5 v-show="!user"><span @click="handleLogin">登录</span>/<span @click="handleRegister">注册</span></h5>
      </template>
      <Menu />
      <Contact v-if="data" v-show="user" />
      <p class="loginOut" v-show="user" @click="handleLoginOut" >退出登录</p>
      <p class="footer" v-if="data">
      {{data.icp}}
    </p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
import showMessage from '../../utils/showMessage'
// import {mapState} from 'vuex';
export default {
components:{
    Avatar,
    Menu,
    Contact
},
computed:{
    data(){
    return this.$store.state.setting.data
  },
  user(){
      return this.$store.state.loginUser.data
  }
},
methods:{
   async handleLoginOut(){
        this.$store.dispatch("loginUser/loginOut")
        await this.$store.dispatch("setting/fetchSetting")
        this.$router.push("/");

        showMessage({
            content:'退出成功'
        })
    },
    handleLogin(){
        this.$router.push("/login");
    },
    handleRegister(){
        this.$router.push("/register");
    }

}

}
</script>

<style lang="less" scoped>
.site-aside-container{
    position: relative;
}
.avatar-container{
    box-shadow: 0 0 2px red,
                0 0 4px green,
                0 0 6px yellow,
                0 0 8px blue;
    margin:10px auto;
    margin-top: 20px;
    transition: all 2s;
    &:hover{
        transform: scale(1.2);
    }
}
h5{
    text-align: center;
    span{
        cursor: pointer;
        &:hover{
            color:rgb(7, 150, 245);
        }
    }
}

p{
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    bottom: 3vh;
    font-size: 14px;
    color:#999;
}
.loginOut{
    bottom: 7vh;
    color: #666;
    cursor: pointer;
}
.loginOut:hover{
    color: aqua;
}
.menu-container{
    padding: 10px 0;
}

</style>