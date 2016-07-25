<template>
  <section id="app">
    <!--<div class="route-info">-->
      <!--{{$route | json}}-->
      <!--<hr>-->
      <!--<p>当前的路径：{{$route.path}}</p>-->
      <!--<p>当前的路由参数：{{$route.params | json}}</p>-->
      <!--<p>当前的路由查询参数：{{$route.query | json}}</p>-->
      <!--<p>当前的路由器：{{$route.router}}</p>-->
      <!--<p>当前的路由配置参数：{{$route.matched | json}}</p>-->
      <!--<p>当前的路由的名字：{{$route.name}}</p>-->
    <!--</div>-->
    <div>
      <ul>
        <li v-link="{path: '/'}">首页</li>
        <li v-link="{path: '/basic-usage'}">基本用法</li>
        <li v-link="{path: '/params/dream'}">params用法</li>
        <li v-link="{path: '/nested-routes'}">嵌套路由0</li>
        <li v-link="{path: '/nested-routes/a'}">嵌套路由a</li>
        <li v-link="{path: '/nested-routes/b'}">嵌套路由b</li>
        <li v-link="{name: 'named-route'}">具名路径</li>
      </ul>
    </div>
    <router-view msg="1"></router-view>
  </section>
</template>

<style scope>
  ul > li {
    cursor: pointer;
  }
  .route-info {
    background-color: #f8f8f8;
    color: green;
  }
</style>
