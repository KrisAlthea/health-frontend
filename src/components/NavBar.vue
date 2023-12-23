<script setup>

</script>

<template>
  <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" :to="{name:'home'}">LOGO</router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name:'home'}">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'sports'}">运动</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'family'}">家庭</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              username
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{name:'user'}">个人信息</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">退出登录</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>