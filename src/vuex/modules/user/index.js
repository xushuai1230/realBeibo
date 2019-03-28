 import * as types from './types'
 const state = {
     user: {},
 }
 import {
     userDetailApi
 } from '@/api/user';
 let timer = null;
 clearInterval(timer);

 const actions = {
     Get_user({
         commit
     }) {
         let user_deatil = () => {
             userDetailApi({}).then(res => {
                 if (res.code === 1) {
                     const data = res.data;
                     commit('GET_USER_INFO', data);
                 }
                 if(res.code===505){
                     alert(res.message);
                 }
             }).catch(err => {
                 console.warn(err);
             })
         }
         user_deatil();
         timer = setInterval(() => {
             user_deatil();
         }, 1000 * 60)
     }
 }
 const mutations = {
     //个人信息
     [types.GET_USER_INFO](state, user) {
         state.user = user;
     },
 }

 export default {
     state,
     actions,
     mutations,
     namespaced: true
 }