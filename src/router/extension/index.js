export default [{
    path: "data",
    name: "推广资源",
    component: resolve =>
        require(["@/view/yet-login/extension/data.vue"], resolve)
}, {
    path: "domain",
    name: "推广域名",
    component: resolve =>
        require(["@/view/yet-login/extension/domain.vue"], resolve)
}]