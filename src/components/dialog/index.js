import Main from '@/element-ui/packages/dialog';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
import router from '@/routers/app.routers';
import store from '@/store/index';

let DialogConstructor = Vue.extend(Main);

let instance;

const GlobalDialog = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  instance = new DialogConstructor({
    props: options,
    router,
    store,
  });

  // instance.id = id;

  if (isVNode(instance.content)) {
    //如果content是vnode 则 进行slot映射
    instance.$slots.content = [instance.content];
    instance.content = null;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = PopupManager.nextZIndex();
  return instance.vm;
};

export default GlobalDialog;
