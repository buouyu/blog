import request from "./request";
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))

    return (arr[2]);
  else
    return null;
}



export async function login(loginId, loginPwd) {
  const resp = await request.post("/api/admin/login", { loginId, loginPwd });
  return resp;
}
export async function register(obj) {
  const resp = await request.post("/api/admin/register", obj);
  return resp;
}

export function loginOut() {
  localStorage.removeItem("token");
  
  delCookie('token')
  function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

export async function whoAmI() {
  const token = getCookie('token');
  if(!token){
    return ;
  }
  const resp = await request.get("/api/admin/whoami");
  return resp;
}
