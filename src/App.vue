<template>
  <div id="app">
  <el-container>
    <el-header height="100px">
      <h1>head</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu default-active="1">
            <el-menu-item index="1">
              <router-link to="/main"><span>main1</span></router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/side"><span>main2</span></router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/head"><span>main3</span></router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
