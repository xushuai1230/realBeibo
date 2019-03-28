export default {
    data() {
        return {
            codeDefaults: '获取验证码',
            codeSending: '验证码已发送',
            codeResend: '重新获取',
            sendCode: false,
            firstTime: true,
            countdown: 60,
            timer: null,
        }
    },
    methods: {
        computedTimeCode() {
            this.countdown = 60;
            this.sendCode = true;
            this.firstTime = false;
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.countdown--;
                if (this.countdown < 0) {
                    clearInterval(this.timer);
                    this.countdown = 0;
                    this.sendCode = false;
                }
            }, 1000);
        }
    },
    computed: {
        returnCodeBtnTxt() {
            if (this.sendCode) {
                //  ${this.codeSending}
                return `重新发送(${this.countdown}s...)`;
            } else if (this.firstTime) {
                return this.codeDefaults;
            } else {
                return this.codeResend;
            }
        }
    }
}