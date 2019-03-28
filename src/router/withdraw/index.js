export default [{
        path: "index",
        name: "提现",
        component: resolve =>
            require([
                "@/view/yet-login/withdraw/put-forward/index.vue"
            ], resolve)
    },
    {
        path: "capital",
        name: "资金明细",
        component: resolve =>
            require([
                "@/view/yet-login/withdraw/capital/capital.vue"
            ], resolve)
    }
]