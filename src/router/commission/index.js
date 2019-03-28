export default [{
        path: 'commission',
        name: '佣金概括',
        component: resolve => require(['@/view/yet-login/index/commission/index.vue'], resolve)
    },
    {
        path: 'statistics',
        name: '实时统计',
        component: resolve => require(['@/view/yet-login/index/statistics/index.vue'], resolve)
    },
    {
        path: 'registerrate',
        name: '注册率分析',
        component: resolve => require(['@/view/yet-login/index/registerrate/index.vue'], resolve)
    },
    {
        path: 'retain',
        name: '留存率分析',
        component: resolve => require(['@/view/yet-login/index/retain/index.vue'], resolve)
    },
    {
        path: 'zj-detail',
        name: '资金概况',
        component: resolve => require(['@/view/yet-login/home/zj-detail.vue'], resolve)
    }, {
        path: 'vip-detail',
        name: '会员概况',
        component: resolve => require(['@/view/yet-login/home/vip-detail.vue'], resolve)
    },
]