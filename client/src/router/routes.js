import NotFound from "@/views/NotFound"
import "nprogress/nprogress.css";
import store from '../store'
import {start,done,configure} from "nprogress";
configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function getPageComponent(pageCompResoler){
  return async ()=>{
    start();
    if(process.env.NODE_ENV=='development'){
      await delay(2000);
    }
    const resp = await pageCompResoler();
    done();
    return resp;
  }
}

function delay(duration){
  return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    },duration);
  })
}
export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),
    meta: { title: "首页" }
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>import(/*webpackChunkName:'about' */"@/views/About")),
    meta: { title: "关于我" },
    beforeEnter(to, from, next) {
      if (store.state.loginUser.data) {
        //有用户
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    name: "Blog",
    path: "/blog",
    component: getPageComponent(() =>import(/* webpackChunkName: "blog" */ "@/views/Blog")),
    meta: { title: "文章" }
  },
  {
    name: "CategoryBlog",
    path: "/blog/cate/:categoryId",
    component:getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),
    meta: { title: "文章" }
  },
 
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project")),
    meta: { title: "项目&效果" }
  },
  {
    path: "/login",
    component: () => import("../views/Login"),
    meta: { title: "登录" }
  },
  {
    path: "/register",
    component: () => import("../views/Register"),
    meta: { title: "注册" }
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message")),
    meta: { title: "留言板" }
  },
  {
    name: "BlogDetail",
    path: '/blog/:id',
    component: getPageComponent(() => import(/* webpackChunkName: "detail" */ "@/views/Blog/Detail")),
    meta: { title: "文章详情" }
  },
  {
    name:"NotFound",
    path:"*",
    component:NotFound
  }
];

