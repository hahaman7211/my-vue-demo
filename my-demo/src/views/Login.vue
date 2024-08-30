<template>
      <h2>Log in</h2>
      <!-- form -->
      <el-form ref="loginFormRef" :model="loginFormModel" :rules="rules" label-width="80px">

        <!-- username -->
        <el-form-item label="username" prop="username" style="width: 380px;">
          <el-input v-model="loginFormModel.username" placeholder="帳號" />
        </el-form-item>

        <!-- password -->
        <el-form-item label="password" prop="password" style="width: 380px;">
          <el-input v-model="loginFormModel.password" type="password" placeholder="密碼" />
        </el-form-item>

        <!-- code -->
        <el-form-item label="code" prop="code" style="width: 380px;">
          <el-input v-model="loginFormModel.code"  style="width: 172px; float: left" maxlength="5" />
          <el-image :src="captchaImg.image " class="image" @click="getCaptcha"></el-image>
        </el-form-item>

        <!-- login button -->
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginFormRef)">Login</el-button>
        </el-form-item>

      </el-form>
</template>

<script>
import { reactive, ref } from "vue";
//import axios from 'axios';
import axios from './jay';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'Login',

   setup() {
    //console.log('setup')
    const loginFormModel = reactive({ username: "", password: "", code: "", token: "" })
    const loginFormRef = ref(null)
    const captchaImg = ref({image: ''})
    const rules = {
      username: [{ required: true, message: "请输入帳號", trigger: "blur" }],
      password: [{ required: true, message: "请输入密碼", trigger: "blur" }],
      code: [{ required: true, message: "请输入code", trigger: "blur" }]
    }
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    //submit form for login
    const submitForm = (form) => {
      if (!form) {
        console.log('no form!')
        return
      }
      form.validate((valid) => {
        if (valid) {
          console.log('validate: ' + valid)
          console.log('username: ' + loginFormModel.username)
          console.log('password: ' + loginFormModel.password)
          //to do log in
          axios.post('/login', form).then( res=> {
            console.log('login')
            const jwt = res.headers['authorization']
            store.commit('SET_TOKEN', jwt)
            router.push("/index")

          })
        } 
        else {
            console.log('error submit!')
            //to do 
            return;

          }
      })
    }

    //get image
    const getCaptcha = () => {
				axios.get('/captcha').then( res => {
					//console.log("/captcha")
					loginFormModel.token = res.data.data.token
					captchaImg.value.image = res.data.data.captchaImg
				})
		}
    getCaptcha();

    return {
      loginFormModel,
      loginFormRef,
      rules,
      submitForm,
      captchaImg,
      getCaptcha,
    
    }
  }
}


</script>

<style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}

label {
    color: #aaa;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

.image {
		float: left;
		margin-left: 8px;
		border-radius: 4px;
	}

  .el-row {
		background-color: #fafafa;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
	}

	.el-divider {
		height: 200px;
	}

</style>