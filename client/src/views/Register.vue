<template>
  <div class="register">
    <h1>注册</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="loginId">
        <el-input v-model="ruleForm.loginId"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="loginPwd">
        <el-input v-model="ruleForm.loginPwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq">
        <el-input v-model="ruleForm.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="weixin">
        <el-input v-model="ruleForm.weixin"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="mailTo">
        <el-input v-model="ruleForm.mailTo"></el-input>
      </el-form-item>
      <el-form-item label="个人网址" prop="personWeb">
        <el-input v-model="ruleForm.personWeb"></el-input>
      </el-form-item>
      <el-form-item label="GitHub地址" prop="github">
        <el-input v-model="ruleForm.github"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleClick"
          >注册</el-button
        >
        <el-button @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import showMsg from "../utils/showMessage";
export default {

  data() {
    return {
      ruleForm: {
        loginId: "",
        loginPwd: "",
        qq: "",
        weixin: "",
        mailTo: "",
        personWeb: "",
        github: "",
      },
      rules: {
        loginId: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, message: "长度不能小于3", trigger: "blur" },
        ],
        loginPwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, message: "长度不能小于3", trigger: "blur" },
        ],
        qq: [
          { required: true, message: "QQ不能为空", trigger: "blur" },
          { min: 3, message: "长度不能小于3", trigger: "blur" },
        ],
        weixin: [{ required: true, message: "微信不能为空", trigger: "blur" }],
        mailTo: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "请填写正确的邮箱地址", trigger: "blur" },
        ],
        personWeb: [
          { type: "url", message: "请填写正确的网址", trigger: "blur" },
        ],
        github: [
          { type: "url", message: "请填写正确的GitHub地址", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    async handleClick(e) {
      e.preventDefault();
      const user = await this.$store.dispatch("loginUser/register", {
        username: this.ruleForm.loginId,
        password: this.ruleForm.loginPwd,
        qq: this.ruleForm.qq,
        weixin: this.ruleForm.weixin,
        mailTo: this.ruleForm.mailTo,
        personWeb: this.ruleForm.personWeb,
        github: this.ruleForm.github,
      });
      if (user) {
        if (typeof user == "number") {
          showMsg({
            content: "注册成功",
          });
          this.$router.push("/login");
        } else {
          showMsg({
            content: user,
          });
        }
      } else {
        showMsg({
          content: "请输入正确的信息",
        });
      }
    },
    handleLogin(){
      this.$router.push('/login');
    }
  },
};
</script>

<style lang="less" scoped>
.register{
  position: absolute;
  width:500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  h1{
    position: absolute;
    top:-90px;
    left: 50%;
  transform: translateX(-50%);
  font-weight: normal;
  }
}
</style>
