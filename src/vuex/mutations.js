/**
 * Created by Administrator on 2018/10/24.
 */
import * as types from './type'
import router from '@/router/index'

const mutations = {
    [types.EDIT_ADDRESS_DIALOG](state, payload) {
        state.editaddressDialog = payload.editaddressDialog
    },
    [types.EDIT_PASSWORD](state, payload) {
        state.editPassword = payload.editPassword
    },
    [types.PHONE_VALIDATE](state, payload) {
        state.phoneValidate = payload.phoneValidate
    },
    [types.EMAIL_VALIDATE](state, payload) {
        state.emailValidate = payload.emailValidate
    },
    [types.BANK_CARD](state, payload) {
        state.bankcard = payload.bankcard
    },
    [types.VIP_DETAIL](state, payload) {
        state.vipDetail = payload.vipDetail
    },
    [types.LOGIN](state, payload) {
        state.logindialog = payload.logindialog
        console.log(state.logindialog, payload)
    },
    [types.EDIT_EXTENSION](state, payload) {
        state.extensionVisible = payload.extensionVisible
        state.addNet = payload.addNet
        state.makeErweima = payload.makeErweima
        state.editshow = payload.editshow
        console.log(state.extensionVisible, payload)
    },
    [types.LOGIN_OUT_STATE](state, loginoutStatus) {
            localStorage.removeItem('profile');
            router.push('/login');
    },
}

export default mutations;