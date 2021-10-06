import axios from 'axios';
import showMessage from '../utils/showMessage';
// const ins = axios.create();
const token = localStorage.getItem("token");
let instance = axios;
if (token) {
  instance = axios.create({
    headers: {
      authorization: "bearer " + token,
    },
  });
}

instance.interceptors.response.use(
    resp=>{
    if(resp.data.code !== 0){
        showMessage({
            type:"error",
            content:resp.data.msg,
        })
        return;
    }
    if (resp.headers.authorization) {
        localStorage.setItem("token", resp.headers.authorization);
      }
    return resp.data.data;
},
(err) => {
    //3. 响应的时候，如果响应的消息码是403（没有token，token失效），在本地删除token
    if (err.response.status === 403) {
      localStorage.removeItem("token");
    }
    return Promise.reject(err);
  }
)
export default instance;