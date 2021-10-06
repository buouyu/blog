<template>
  <!-- <div class="login">
    <el-form label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="loginId" autocomplete="new-password"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="loginPwd"
          type="password"
          autocomplete="new-password"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleClick">登录</el-button>
      <el-button type="primary" plain @click="handleRegister">注册</el-button>
    </el-form>
    
  </div> -->
  <div class="form" id="loginform">
    <h1> 登录 </h1>
    <form novalidate>
        <p class="email">
            <label for="email">账号 <span>*</span>
            </label>
            <input class="input" required v-model="loginId"  id="email"  />
          <span class="validation error"> Please enter a valid email</span>
          <span class="validation req"> This field is required</span>
        </p>
        <p class="password">
            <label for="password">密码 <span>*</span></label>
            <input class="input" required type="password" v-model="loginPwd" id="password" name="password" />
          <span class="validation req"> This field is required</span>
        </p>
      <p class="remember">
        <input class="checkbox" type="checkbox" id="remember"/>
        <label for="remember"> Remember me</label>
        
      </p>
      <p class="login">
        <input type="submit" @click="handleClick" value="登录" />
      </p>
      <p class="login">
        <input type="submit" class="register" @click="handleRegister" value="注册" />
      </p>
    </form>
</div>
</template>

<script>
import showMsg from "../utils/showMessage";
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    async handleClick(e) {
      e.preventDefault();
      const user = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (user) {
        //成功
        this.$router.push("/");
        await this.$store.dispatch("setting/fetchSetting");
        showMsg({
          content: "登录成功",
        });
      } else {
        showMsg({
          content: "账号密码错误",
        });
      }
    },
    async handleWhoAmI() {
      const user = await this.$store.dispatch("loginUser/whoAmI");
      console.log(user);
    },
    handleLoginOut() {
      // this.$store.dispatch("loginUser/loginOut");
      console.log(this.loginId);
    },
    handleRegister(e) {
      e.preventDefault()
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="less" scoped>

@primary : #FEDC2A ;
@complementary :#5A3B5D;
@lightsep: rgb(220, 220, 220);



.checkbox + label:before {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(216, 216, 216);
}

/* transitionned state when checked */
.checkbox:checked + label:before {
    background: @complementary;
    border-color: @complementary;
}

/* applying transition */
.checkbox + label:before {
    transition: 
      background .2s, 
      border-color .2s;
    /* double transition, yup ! */  
}



/* Let's animate the mark */
.checkbox:not(:checked) + label:after {
    transform: scale(0);
}
.checkbox:checked + label:after {
    transform: scale(1);
}
.checkbox + label:after {
    transition: transform .4s;
}



/****** 2. Let's shake this form  ******/

/* Creating the animation */
@keyframes shakeMe {
    0%, 100% {
        transform: translateX(0);
    }
    20%,
    60% {
        transform: translateX(-10px);
    }
    40%,
    80% {
        transform: translateX(10px);
    }
}


/* Applying the animation */
.errors {
    animation-name: shakeMe;
    animation-duration: .5s;
}




/****** Here come the unicorns, aka all the styling not useful for the animation demo at the conference :)  ******/

 body {
    background: #FEDC2A;
    font-family: 'Raleway', sans-serif;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


.form {
    background: #fff;
    border: 1px solid #D9D9D9;
    color: rgb(99, 99, 99);
    width: 300px;
    border-radius: 4px;
    margin: 0 auto;
    padding: 20px 30px;
    h1 {
        text-transform: uppercase;
        font-weight: normal;
        font-size: 1.5em;
        text-align: center;
        margin: 0;
        padding: 10px 0px;
        border-bottom: 1px solid     @lightsep;
    }
}

form p {
    position: relative;
    margin: 25px 0 10px 0 ;
    position: relative;
}


p.remember {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid @lightsep;
}
.email label,
.password label,
.input {
    display: block;
    width: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
}


/* Submit button Styling */

[type="submit"] {
    display: block;
    color: @complementary;
    font-weight: bold;
    border-radius: 2px;
    background: @primary;
    box-shadow: 5px 5px 0 0 @primary,
      inset 4px 4px 0 0 white;
    border: 2px solid @complementary; 
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    transition: background .3s;
    &:hover {
        background: white;
    box-shadow: 5px 5px 0 0 @primary,
      inset 4px 4px 0 0 white;
    }
  

}
.register{
  background: spin(@primary,100);
  box-shadow: 5px 5px 0 0 spin(@primary,100),
      inset 4px 4px 0 0 white;
  &:hover {
    box-shadow: 5px 5px 0 0 spin(@primary,100),
      inset 4px 4px 0 0 white;
    }
}

[type="password"],
[type="email"] {
    padding: 20px;
    &:focus {
        outline: none;
    }
}
/* Styling the input */

.input {
    font-size: .85em;
    background: rgb(255, 255, 255);
    border: 1px solid @lightsep;
    height: 40px;
    transition: border-color .4s, box-shadow 1s;
}

.input:active,
.input:focus {
    border: 1px solid @complementary;
    box-shadow: 4px 4px 0 #C7A9CD;
}


/* Removing the checkbox from screen */
.checkbox {
    position: absolute;
    left: -300%;
}
.checkbox + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
}

/* Creating the fake checkbox */
.checkbox + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 2px;
}

/* accessibility */
.checkbox:focus + label:before {
    border: 1px solid @complementary;
    box-shadow: 4px 4px 0 #C7A9CD;
}

/* Adding the SVG mark */

.checkbox + label:after {
    content: " ";
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.7 8.7" enable-background="new 0 0 10.7 8.7"><path fill="white" d="M4.2 8.7c-.3 0-.5-.3-.7-.5l-3.2-3.1c-.4-.4-.4-1.1 0-1.5s1-.4 1.4 0l2.4 2.3 4.9-5.6c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-5.6 6.6c-.1.2-.4.5-.7.5z"/></svg>') no-repeat; /* OMG you can embed SVG in background, awesoome */
    position: absolute;
    left: 2px;
    top: 3px;
    width: 13px;
    height: 13px;
}



/****** Validation messages ******/

.invalid {
    border-color: rgb(183, 0, 76);
}

.required {
    border-color: #B54300;
}

.validation {
  display: block;
  font-size: .8em;  
  padding-top: .5em;
  position: absolute;
  right:0;
  opacity: 0;
  transition: opacity 1s ;
}

.validation.req {
  color: #B54300;
}

.validation.error {  
  color: rgb(183, 0, 76); 
}


.invalid:not(.required)  ~ .validation.error {
  opacity: 1;
  transform: scale(1);   
}

.required  ~ .validation.req {
  opacity: 1;
  transform: scale(1);   
}



#loginform{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);


}
</style>
