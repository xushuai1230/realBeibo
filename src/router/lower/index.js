export default [{
        path: 'sub-member',
        name: '下级会员',
        component: resolve => {
            require(["@/view/yet-login/lowerlist/sub-member/sub-member.vue"], resolve)
        }
    },
    {
        path: 'lower-agent',
        name: '下级代理',
        component: resolve => {
            require(["@/view/yet-login/lowerlist/lower-agent/lower-agent.vue"], resolve)
        }
    },
    {
        path: 'man-account',
        name: '管理下级代理账号',
        component: resolve => {
            require(["@/view/yet-login/lowerlist/man-account/man-account.vue"], resolve)
        }
    }
]