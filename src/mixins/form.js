//用户名验证 6-16
const userNameReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
//手机号
const telReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
//密码
const passReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
//昵称
const nickNameReg = /([^\u4E00-\u9FA5\uf900-\ufa2d\w]|[_])/g;
//真实姓名
const reallyNameReg = /^[\u4e00-\u9fa5]{2,4}$/;
//yyyy-mm-dd
const dataReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
//邮箱验证
const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
export const userNameRules = [{
    required: true,
    message: '请输入用户名或手机号码',
    trigger: 'blur'
}, {
    min: 6,
    max: 16,
    message: '请输入正确的账户名或手机号码'
}]

export const passRules = [{
    required: true,
    message: '请输入密码',
    trigger: 'blur'
}, {
    min: 8,
    max: 20,
    message: '请输入正确的密码'
}]
export const newpassRules = [{
    required: true,
    message: '请输入新密码',
    trigger: 'blur'
}, {
    min: 8,
    max: 20,
    message: '请输入正确的密码'
}]

export const telRules = [{
    required: true,
    message: '请输入手机号',
    trigger: 'blur',
    pattern: telReg,
}, {

    len: 11,
    message: '请输入正确的手机号'
}]
export const emailRules = [{
    required: true,
    message: '请输入正确的邮箱',
    trigger: 'blur',
    pattern: emailReg,
}]
export default {
    computed: {
        dateRules() {
            return [{
                required: true,
                message: '请输入生日',
                trigger: 'blur',
                pattern: dataReg,
            }];
        },
        nickNameRules() {
            return [{
                validator: (rule, value, callbak) => {
                    if (value === '') {
                        callback(new Error('请输入昵称'));
                    } else if (!nickNameReg.test(value)) {
                        callback(new Error('请输入正确格式的昵称!'));
                    } else {
                        callback();
                    }
                },
                trigger: 'blur',
                required:true,
            }];
        },
        reallyNameRules() {
            return [{
                validator: (rule, value, callbak) => {
                    if (value === '') {
                        callback(new Error('请输入真实姓名'));
                    } else if (!reallyNameReg.test(value)) {
                        callback(new Error('请输入正确的真实姓名!'));
                    } else {
                        callback();
                    }
                },
                trigger: 'blur',
                required: true,
            }];
        }
    }
}