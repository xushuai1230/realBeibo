<template>
  <div class="el-form-item" :class="[{
      'el-form-item--feedback': elForm && elForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-flex': flexClass,
      'is-no-spacing': spacingClass,
      'is-required': isRequired || required
    },
    sizeClass ? 'el-form-item--' + sizeClass : ''
  ]">
    <label :for="labelFor" class="el-form-item__label" v-bind:style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{label + form.labelSuffix}}</slot>
    </label>
    <div class="el-form-item__content" v-bind:style="contentStyle">
      <transition name="el-zoom-in-top">
        <div
          v-if="validateState === 'error' && showMessage && form.showMessage"
          class="el-form-item__error"
          :class="{
            'el-form-item__error--inline': typeof inlineMessage === 'boolean'
              ? inlineMessage
              : (elForm && elForm.inlineMessage || false)
          }"
        >
          {{validateMessage}}
        </div>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator';
  import emitter from 'element-ui/src/mixins/emitter';
  import objectAssign from 'element-ui/src/utils/merge';
  import { noop, getPropByPath } from 'element-ui/src/utils/util';

  export default {
    name: 'ElFormItem',

    componentName: 'ElFormItem',

    mixins: [emitter],

    provide() {
      return {
        elFormItem: this
      };
    },

    inject: ['elForm'],

    props: {
      label: String,
      labelWidth: String,
      prop: String,
      required: {
        type: Boolean,
        default: undefined
      },
      rules: [Object, Array],
      error: String,
      validateStatus: String,
      for: String,
      inlineMessage: {
        type: [String, Boolean],
        default: ''
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      noSpacing: Boolean,
      flex: Boolean,
      size: String
    },
    watch: {
      error: {
        immediate: true,
        handler(value) {
          this.validateMessage = value;
          this.validateState = value ? 'error' : '';
        }
      },
      validateStatus(value) {
        this.validateState = value;
      }
    },
    computed: {
      labelFor() {
        return this.for || this.prop;
      },
      labelStyle() {
        const ret = {};
        if (this.form.labelPosition === 'top') return ret;
        const labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.width = labelWidth;
        }
        return ret;
      },
      contentStyle() {
        const ret = {};
        const label = this.label;
        if (this.form.labelPosition === 'top' || this.form.inline) return ret;
        if (!label && !this.labelWidth && this.isNested) return ret;
        const labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.marginLeft = labelWidth;
        }
        return ret;
      },
      form() {
        let parent = this.$parent;
        let parentName = parent.$options.componentName;
        while (parentName !== 'ElForm') {
          if (parentName === 'ElFormItem') {
            this.isNested = true;
          }
          parent = parent.$parent;
          parentName = parent.$options.componentName;
        }
        return parent;
      },
      fieldValue: {
        cache: false,
        get() {
          const model = this.form.model;
          if (!model || !this.prop) { return; }

          let path = this.prop;
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.');
          }

          return getPropByPath(model, path, true).v;
        }
      },
      isRequired() {
        let rules = this.getRules();
        let isRequired = false;

        if (rules && rules.length) {
          rules.every(rule => {
            if (rule.required) {
              isRequired = true;
              return false;
            }
            return true;
          });
        }
        return isRequired;
      },
      _formSize() {
        return this.elForm.size;
      },
      elFormItemSize() {
        return this.size || this._formSize;
      },
      spacingClass() {
        return this.noSpacing || this.elForm.noSpacing;
      },
      sizeClass() {
        return this.elFormItemSize || (this.$ELEMENT || {}).size;
      },
      flexClass() {
        return this.flex || this.elForm.flex;
      },
    },
    data() {
      return {
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {},
        isNested: false
      };
    },
    methods: {
      validate(trigger, callback = noop) {
        this.validateDisabled = false;
        const rules = this.getFilteredRule(trigger);
        if ((!rules || rules.length === 0) && this.required === undefined) {
          callback();
          return true;
        }

        this.validateState = 'validating';

        const descriptor = {};
        if (rules && rules.length > 0) {
          rules.forEach(rule => {
            delete rule.trigger;
          });
        }
        descriptor[this.prop] = rules;

        const validator = new AsyncValidator(descriptor);
        const model = {};

        model[this.prop] = this.fieldValue;

        let promise;
        let itemCallback = noop;

        if (!trigger && callback === noop && window.Promise) {
          promise = new window.Promise((resolve, reject) => {
            itemCallback = function(valid) {
              valid ? resolve(valid) : reject(valid);
            };
          });
        }

        validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';

          callback(this.validateMessage, invalidFields);
          this.elForm && this.elForm.$emit('validate', this.prop, !errors);
          itemCallback(!this.validateMessage);
        });

        if (promise) {
          return promise;
        }
      },
      clearValidate() {
        this.validateState = '';
        this.validateMessage = '';
        this.validateDisabled = false;
      },
      resetField() {
        this.validateState = '';
        this.validateMessage = '';

        let model = this.form.model;
        let value = this.fieldValue;
        let path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }

        let prop = getPropByPath(model, path, true);

        this.validateDisabled = true;
        if (Array.isArray(value)) {
          prop.o[prop.k] = [].concat(this.initialValue);
        } else {
          prop.o[prop.k] = this.initialValue;
        }
        /* Select 的值被代码改变时不会触发校验，
           这里需要强行触发一次，刷新 validateDisabled 的值，
           确保 Select 下一次值改变时能正确触发校验 */
        this.broadcast('ElSelect', 'fieldReset');

        this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
      },
      getRules() {
        let formRules = this.form.rules;
        const selfRules = this.rules;
        const requiredRule = this.required !== undefined ? { required: !!this.required } : [];

        const prop = getPropByPath(formRules, this.prop || '');
        formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];

        return [].concat(selfRules || formRules || []).concat(requiredRule);
      },
      getFilteredRule(trigger) {
        const rules = this.getRules();

        return rules.filter(rule => {
          if (!rule.trigger || trigger === '') return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        }).map(rule => objectAssign({}, rule));
      },
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        this.validate('change');
      }
    },
    mounted() {
      if (this.prop) {
        this.dispatch('ElForm', 'el.form.addField', [this]);

        let initialValue = this.fieldValue;
        if (Array.isArray(initialValue)) {
          initialValue = [].concat(initialValue);
        }
        Object.defineProperty(this, 'initialValue', {
          value: initialValue
        });

        let rules = this.getRules();

        if (rules.length || this.required !== undefined) {
          this.$on('el.form.blur', this.onFieldBlur);
          this.$on('el.form.change', this.onFieldChange);
        }
      }
    },
    beforeDestroy() {
      this.dispatch('ElForm', 'el.form.removeField', [this]);
    }
  };
</script>
