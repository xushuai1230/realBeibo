
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import indexChidren from "./yet-login";
//首页
import commissionChidren from "./commission";
//报表
import reportChildren from './report';
// 消息中心
import noticeChildren from './notice'
//登录路由
import loginChidren from './login';
//个人中心
import userChidren from './user';
//推广数据  
import extensionChidren from './extension';
//资金明细
import withDrawChildren from './withdraw';
//下级
import lowerChildren from './lower';
export default new Router({
  mode: "history",
  routes: [
    //登录注册忘记密码
    {
      path: "/login",
      redirect: "",
      component: resolve =>
        require(["@/view/login-manager/index.vue"], resolve),
      children: loginChidren
    },
    {
      path: "/",
      name: "",
      redirect: "/index"
    },
    //个人中心
    {
      path: '/user',
      redirect: 'info',
      component: resolve =>
        require(["@/view/user/index.vue"], resolve),
      children: userChidren,
    },
    // //首页
    // {
    //   path: "/home",
    //   name: "home",
    //   component: resolve => require(["@/view/not-login/index.vue"], resolve)
    // },
    //已登录首页
    {
      path: "/index",
      name: "index",
      redirect: "/",
      component: resolve => require(["@/view/yet-login/index.vue"], resolve),
      children: [
        {
          path: "/",
          redirect: "commission",
          component: resolve =>
            require(["@/view/yet-login/index/index.vue"], resolve),
          children: commissionChidren
        },
        // 推广数据
        {
          path: "/extension",
          name: "推广数据",
          redirect: '/extension/domain',
          component: resolve =>
            require(["@/view/yet-login/extension/index.vue"], resolve),
          children: extensionChidren,
        },
        // 佣金提现
        {
          path: "/withdraw",
          name: "佣金提现",
          component: resolve =>
            require(["@/view/yet-login/withdraw/index.vue"], resolve),
          children: withDrawChildren
        },
        // 下级列表
        {
          path: "/lowerlist",
          name: "下级列表",
          redirect: '/lowerlist/sub-member',
          component: resolve =>
            require(["@/view/yet-login/lowerlist/index.vue"], resolve),
          children: lowerChildren
        },
        // 报表中心
        {
          path: "/reportform",
          name: "报表",
          redirect: "/reportform/finance",
          component: resolve =>
            require(["@/view/yet-login/reportform/index.vue"], resolve),
          children: reportChildren
        },
         // 消息中心
         {
          path: "/notice",
          name: "消息中心",
          redirect: "/notice/Platform",
          component: resolve =>
            require(["@/view/yet-login/notice/index.vue"], resolve),
          children: noticeChildren
        },
        // 常见问题
        {
          path: "/problem",
          name: "problem",
          component: resolve =>
            require(["@/view/yet-login/footer-nav/problem.vue"], resolve),
          children: indexChidren
        }
      ]
    }
  ]
});