export default [
    {
        path: "info",
        name: "user-info",
        component: resolve => require(["@/view/user/info/index.vue"], resolve)
    },
    {
        path: "safety",
        name: "user-safety",
        component: resolve => require(["@/view/user/safety/index.vue"], resolve)
    },
]