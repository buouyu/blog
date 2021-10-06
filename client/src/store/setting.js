import {getSetting} from "@/api/setting.js";
import {titleController} from "@/utils";
export default {
    namespaced:true,
    state:{
        loading:false,
        data:null
    },
    mutations:{
        setLoading(state,payload){
            state.loading=payload;
        },
        setData(state,payload){
            state.data=payload;
        }
    },
    actions:{
        async fetchSetting(ctx){
        ctx.commit('setLoading',true);
        const resp = await getSetting();
        ctx.commit('setData',resp);
        ctx.commit('setLoading',false);
       
        if(resp.favicon){
            let link = document.querySelector("link[rel='shortcut icon']");
            if(link){
                return;
            }
            const linkDom = document.createElement('link');
            linkDom.rel='shortcut icon';
            linkDom.type='images/x-icon';
            linkDom.href=resp.favicon;
            document.querySelector('head').appendChild(linkDom);
        }
        if(resp.webTitle){
            titleController.setSiteTitle(resp.webTitle);
        }
    }}
}