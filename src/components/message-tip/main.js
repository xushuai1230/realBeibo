import Main from './index.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
import router from '@/routers/app.routers';
import store from '@/store/index';

let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const MessageTip = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    MessageTip.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options,
    router,
    store,
  });
  instance.id = id;
  if (isVNode(instance.message)) {
    instance.$slots.message = [instance.message];
    instance.message = null;
  }
  if (isVNode(instance.goTo)) {
    instance.$slots.goTo = [instance.goTo];
    instance.goTo = null;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
  return instance.vm;
};

MessageTip.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

MessageTip.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default MessageTip;
