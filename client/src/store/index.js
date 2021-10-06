import Vue from "vue";
import {Store,install} from "vuex";
import banner from "./banner.js";
import setting from "./setting.js";
import about from "./about.js";
import project from './project.js';
import loginUser from './loginUser'
if(!window.vuex){
    install(Vue);
}
export default new Store({
    modules:{
        banner,
        setting,
        about,
        project,
        loginUser
    },
    strict:true,
})
