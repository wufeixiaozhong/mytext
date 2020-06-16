<template>
  <div class="home">
    <!-- 容器布局 -->
    <el-container>
  <el-aside width="200px">
    <!-- 用户信息 -->
    <div class="admin">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size='80'></el-avatar>
      <div class="text">
      <span>用户名：1338888888888</span>
      <span>共享账户个数：4个</span>
      <span>是否VIP：否</span>
      <span>到期时间：0</span>
      <div class="btn">
      <el-button type="primary" plain size="mini">续费</el-button>
      <el-button type="danger" size="mini">退出</el-button>
      </div>
      </div>

    </div>
    <!-- 左侧导航菜单 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-video-play"></i>
          <span>直播间互动</span>
        </template>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-upload"></i>
        <span slot="title">添加云账户</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>

        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        <span slot="title">会员中心</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <!-- 头部 -->
    <el-header>
    <div class="left">
      <img src="../../assets/images/WechatIMG16.png" alt="" width="35px">
      <span>优大人抖音助手</span>
    </div>
    <div class="right">
      <span><span class="l">信息提醒：</span>您的共享账户xxxxx已经失效，为保证功能稳定请尽快重新共享! <span class="l">五分钟后权限调整</span></span>
    </div>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style lang="less" scoped>
//aside
 .el-aside{
   padding-top: 10px;
   height: 100vh;
  background-color: #545c64;
  .admin{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    .text{
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: aliceblue;
    }
  }
.el-menu-vertical-demo {
  width: 201px;
}
}
//header
.el-header{
  display: flex;
  align-items: center;
  height: 50px;
  border: solid #ccc 1px;
  .left{
    span{
      font-size: 26px;
    }
  }
  .right{
    margin-left: 250px;
  width: 520px;
  height: 30px;
  font-size: 12px;
  background-color: #ccc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span{
    margin-right: 2px;
    .l{
      color: #f00;
    }
  }
}
}

</style>
