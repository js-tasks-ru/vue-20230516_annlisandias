import { defineComponent } from './vendor/vue.esm-browser.js';
import CounterButton from './CounterButton.js';

export default defineComponent({
  name: 'App',

  components: {
    CounterButton,
  },

  data() {
    return {
      count: undefined,
    };
  },
  methods: {
    updateCount(payload) {
      this.count = payload;
    }
  },
  template: `
    <div class="sample container">
      <p>count = {{ count }}</p>
      <p>
        <CounterButton :count="count" @updateCount="updateCount" />
      </p>
      <p>
        <CounterButton v-model:count="count" @updateCount="updateCount" />
      </p>
      <p>
        <CounterButton v-model:count="count" @updateCount="updateCount" />
      </p>
    </div>
  `,
});
