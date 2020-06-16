<template>
<div class="container">
<el-container>
  <!-- main主体-->
  <el-main>
    <!-- 卡片 -->
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <div class="img">
    </div>
    <span>抖大人互动工具</span>
  </div>
  <!-- tab栏 -->
<el-tabs type="border-card">
  <el-tab-pane label="手机号登录">
    <!-- form表单 -->
    <el-form :model='loginForm' :rules='ruleForm' ref="formObj">
      <!-- 手机号 -->
      <el-form-item prop='mobile'>
        <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
      </el-form-item>
      <!-- 发送 输入验证码 -->
      <el-form-item prop='code'>
        <el-input placeholder='验证码' style="width:250px" v-model="loginForm.code"></el-input>
        <el-button style="float:right" @click="sent">发送验证码</el-button>
      </el-form-item>
      <!-- 勾选服务条款 -->
      <el-form-item prop='checked'>
         <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-tab-pane>
  <el-tab-pane label="微信登录">
    <div class="top">微信登录</div>
    <img src="../../assets/images/WechatIMG17.jpeg" alt="" width="300px">
    <p>请使用微信扫描二维码登录</p>
    <p>"优大人商家版"</p>
    <p>发现并服务优质内容制造者-数据运营改变内容生产</p>
    </el-tab-pane>
</el-tabs>
</el-card>

    <!-- 左侧抽屉 -->
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;" class="btn" size="mini">
    联<br><br>系<br><br>我<br><br>们
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      size="20%"
      >
      <div class="top">
        <h4>咨询热线</h4>
        <span>18019410181</span>
      </div>
      <div class="main">
        <h4>在线客服</h4>
        <span>kefu@udaren.com</span>
        <span>商务/渠道合作</span>
        <span>laoli@zhiboclub.com</span>
        <span>QQ: 14496966</span>
      </div>
      <div class="footer">
        <h4>官方微信站</h4>
        <div class="img">
        </div>
      </div>
    </el-drawer>
  </el-main>
  <!-- 底部 -->
  <el-footer>
上海益采信息技术有限公司2018版权所有
<span>沪ICP备17034799号-1</span>
  </el-footer>
</el-container>
</div>

</template>
<script>
import { login, code } from '../../api/user'
export default {
  name: 'loginPage',
  data () {
    return {
      // 表单数据对象
      loginForm: {
        Mobile: '', // 手机号
        Code: '', // 验证码
        Action: '', // 登录方式
        checked: false // 勾选框
      },
      // 数据校验对象
      ruleForm: {
        mobile: [{ required: true, message: '请输入手机号' }, { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确手机号' }], // 自动校验
        code: [{ required: true, message: '请输入验证码' }, { pattern: /^\d{6}$/, message: '请输入6位数验证码' }], // 自动校验
        checked: [{
          // 自定义校验规则
          validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('您还没有勾选条款'))
            }
          }
        }]
      },
      // 左侧抽屉
      drawer: false
    }
  },
  methods: {
    // 点击登录
    login () {
      // 手动校验(手动校验通过后才允许发请求)
      this.$refs.formObj.validate(async (isOk) => {
        if (isOk) {
          const res = await login(this.loginForm)
          console.log(res)
        }
      })
    },
    async sent () {
      const res = await code(this.loginForm)
      console.log(res, '请求成功')
    }
  }

}
</script>

  <style lang="less" scoped>
.container{
  height: 100vh;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //main样式
  .el-main{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text1{
      color: #fff;
      margin-bottom: 20px;
    }
    //卡片样式
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
 .box-card {
    width: 480px;
    background-color: #ccc;
    border: 0;
      border-bottom: 1px solid #fff;
     .clearfix{
      display: flex;
      vertical-align: bottom;
      .img{
      width: 30px;
      height: 30px;
      // border: solid #000 1px;
      background: url('../../assets/images/WechatIMG16.png') no-repeat;
      background-size: cover;
    }
      span{
        color: #00f;
        font-size: 28px;
        margin-left: 10px;
      }
    };
    .el-card__body{
      border-top: 1px solid #f00;
      .el-tab-pane{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

  };
  //侧边栏
  .el-drawer__wrapper /deep/.el-drawer__body{
    background-color: #00f;
    color: #fff;
    .top{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid #ccc;
      margin: 0 20px;
    }
    .main{
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin: 0 20px;
      span{
        margin-bottom: 10px;
      }
    }
    .footer{
      display: flex;
      flex-direction: column;
      align-items: center;
      .img{
        width: 100%;
        height: 200px;
        background: url('../../assets/images/WechatIMG17.jpeg') no-repeat 35px;
        background-size: contain;
      }
    }

  }
  //联系我们
  .btn{
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-50%)
  }
  };
  .el-footer{
    width: 100vw;
    line-height: 60px;
    background-color: #fff;
    font-size: 14px;
    color: #ccc;
    text-align: center;
    span{
      color: #00f;
    }
  }

}
  </style>
