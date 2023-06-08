import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  emits: ['updateCount'],
  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  methods: {
    updateCount() {
      this.$emit('updateCount', this.count + 1);
    }
  },
  template: `<button type="button" @click="updateCount()">{{ count }}</button>`,
});
