<template>
  <el-container class="home-container">
    <el-header class="header">
      <div class="hde">
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#409EFF"
          active-text-color="#ffd04b"
          unique-opened
          router
          :default-active="activePath"
        >
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/'+subItem.path+''" 
            @click="saveNavState('/'+subItem.path)" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template></el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
        return{
            menulist:[],
            activePath:''
        }
    },
    created(){
      this.getMenuList()
      this.activePath=window.sessionStorage.getItem('activePath')
    },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList(){
        const {data:res}=await this.$http.get('menus')
        if(res.meta.status!==200)return this.$message.error(res.meta.msg);
        this.menulist=res.data
        // console.log(res)
    },
    saveNavState(activePath){
        window.sessionStorage.setItem('activePath',activePath)
        this.activePath=activePath
    }
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu{
      border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
</style>