import Vue from 'vue';
//引入svg组件
import IconSvg from '@/components/svg-icon/index.vue';
import passwordInput from './password-input/index';
import validateImg from './validate-img/index';
import elTip from './el-tip/index';
import staticContainer from './static-container/index';
import staticContainerHeader from './static-container/static-container-header';
import staticContainerBody from './static-container/static-container-body';
import closeButton from './close-button/index';
import dialogSubtitle from './dialog-subtitle/index';
import elWarning from './el-warning';
import badgeText from './badge-text';
import linkButton from './link-button';
import subNav from './sub-nav';
import page from './page/page.vue';
//全局注册icon-svg
Vue.component('icon-svg', IconSvg);
Vue.component('password-input', passwordInput);
Vue.component('validate-img', validateImg);
Vue.component('el-tip', elTip);
Vue.component('static-container', staticContainer);
Vue.component('static-container-header', staticContainerHeader);
Vue.component('static-container-body', staticContainerBody);
Vue.component('close-button', closeButton);
Vue.component('dialog-subtitle', dialogSubtitle);
Vue.component('el-warning', elWarning);
Vue.component('badge-text', badgeText);
Vue.component('link-button', linkButton);
Vue.component('sub-nav', subNav);
Vue.component('page', page);

