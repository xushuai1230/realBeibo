export default [{
    path: 'finance',
    name: '财务总报表',
    component: resolve => require(['@/view/yet-login/reportform/finance/finance.vue'], resolve)
}, {
    path: 'gameWinlose',
    name: '游戏输赢报表',
    component: resolve => require(['@/view/yet-login/reportform/gameWinlose/gameWinlose.vue'], resolve)
}, {
    path: 'depositForward',
    name: '存提明细报表',
    component: resolve => require(['@/view/yet-login/reportform/depositForward/depositForward.vue'], resolve)
}, {
    path: 'dividend',
    name: '红利返水报表',
    component: resolve => require(['@/view/yet-login/reportform/dividend/dividend.vue'], resolve)
}, {
    path: 'brokerage',
    name: '佣金报表',
    component: resolve => require(['@/view/yet-login/reportform/brokerage/brokerage.vue'], resolve)
}, {
    path: 'topscore',
    name: '上分记录',
    component: resolve => require(['@/view/yet-login/reportform/topscore/topscore.vue'], resolve)
}, ]