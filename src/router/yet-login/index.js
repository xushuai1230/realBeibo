export default [{
    path: 'problem',
    name: '常见问题',
    component: resolve => require(['@/view/yet-login/footer-nav/problem/index.vue'],resolve)
},{
    path: 'aboutus',
    name:'关于我们',
    component:resolve => require(['@/view/yet-login/footer-nav/about-us/index.vue'],resolve)
},
{
    path: 'agreement',
    name:'合作协议',
    component:resolve => require(['@/view/yet-login/footer-nav/agreement/index.vue'],resolve)
},{
    path: 'scheme',
    name:'佣金方案',
    component:resolve => require(['@/view/yet-login/footer-nav/scheme/index.vue'],resolve)
}
]