import {getProject} from "@/api/project.js";
export default {
    namespaced:true,
    state:{
        loading:false,
        data:null,
    },
    mutations:{
        setData(state,payload){
            state.data=payload;
        },
        setLoading(state,payload){
            state.loading=payload;
        }
    },
    actions:{
        async fetchProject(ctx){
            if(ctx.state.data){
                return;
            }
            ctx.commit('setLoading',true);
            const resp = await getProject();
            ctx.commit('setData',resp);
            ctx.commit('setLoading',false);
        }
    }
}