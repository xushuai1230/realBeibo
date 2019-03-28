export default [{
        path: "",
        name: "login",
        component: resolve =>
            require(["@/view/login-manager/login/index.vue"], resolve)
    },
    {
        path: "/forget-pass",
        name: 'forget-pass',
        component: resolve =>
            require(["@/view/login-manager/forget-password/index.vue"], resolve)
    },
    {
        path: '/register',
        name: 'register',
        component: resolve =>
            require(["@/view/login-manager/register/index.vue"], resolve)
    },
    {
        path: '/register/success',
        name: 'register-success',
        component: resolve =>
            require(["@/view/login-manager/register/register-success.vue"], resolve)
    }
]