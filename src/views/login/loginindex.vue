<template>
  <div class="login-container">
    <a-form :model="formData" class="login-form" :rules="rules" ref="formRef">
      <a-form-item class="title-tip" :wrapperCol="{ span: 24 }"
        >结算系统</a-form-item
      >
      <a-form-item :wrapperCol="{ span: 24 }" name="username">
        <a-input v-model:value="formData.username" @keyup.enter="handleClick">
          <template #suffix>
            <UserOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" name="password">
        <a-input
          v-model:value="formData.password"
          type="password"
          @keyup.enter="handleClick"
        >
          <template #suffix>
            <LockOutlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item class="login-item" :wrapperCol="{ span: 24 }">
        <a-button type="primary" class="login-btn" @click="handleClick"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
// import { Form, Input } from "ant-design-vue";
// import router from "../../router/index";
// import { getUserInfoFetch } from "../../api/api";
// import md5 from "js-md5";
import { randomTs } from "../../utils/factory";
// import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// import { useRouter } from "vue-router";
// import { setLocalStorage } from "@/utils/auth";

export default {
  name: "Login",
  // components: { UserOutlined, LockOutlined },
  setup() {
    // const router = useRouter();
    const formRef = ref(null);
    const formData = reactive({
      username: "",
      password: "",
      rnd: randomTs(5),
    });
    const rules = {
      username: [{ required: true, message: "请填写账号", trigger: "blur" }],
      password: [{ required: true, message: "请填写密码", trigger: "blur" }],
    };
    function handleClick() {
      // formRef.value
      //   .validate()
      //   .then(() => {
      //     formData.password = md5(formData.password);
      //     getUserInfoFetch(formData).then((data) => {
      //       if (data.data.code == "0000") {
      //         setLocalStorage(
      //           "Authority",
      //           JSON.stringify(data.data.activeUserInfo)
      //         );
      //         setLocalStorage(
      //           "routeName",
      //           data.data.activeUserInfo.menu[0].menuName
      //         );
      //         router.push({ path: data.data.activeUserInfo.menu[0].menuAdr });
      //       }
      //     });
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    }
    onMounted(() => {
      localStorage.removeItem("route");
    });
    return {
      formData,
      handleClick,
      rules,
      formRef,
    };
  },
};
</script>
<style lang="less" scoped>
// .login-form {
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .login-item {
//     width: 100%;
//     .ant-form-item-control-wrapper {
//       width: 100%;
//       .ant-form-item-children {
//         width: 100%;
//         display: inline-block;
//         .login-btn {
//           width: 100%;
//         }
//       }
//     }
//   }
// }
.login-container {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url("../../assets/banner01.jpg");
  .ant-form-item {
    width: 100%;
  }
  .title-tip {
    font-size: 2.3vw;
    text-align: center;
    color: #fff;
  }
  .login-form {
    width: 25%;
    min-width: 250px;
    background-color: rgba(0, 0, 0, 0.21);
    float: right;
    border-radius: 0px;
    padding: 6vh;
    border-radius: 20px;
    margin-right: 11%;
    margin-bottom: 9%;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
 