export default [{
        path: 'Platform',
        name: '平台公告',
        component: resolve => {
            require(['@/view/yet-login/notice/announcement-list.vue'], resolve)
        },
    },
    {
        path: 'system',
        name: '系统消息',
        component: resolve => {
            require(['@/view/yet-login/notice/system-notice-list.vue'], resolve)
        }
    }
]