import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        count() {
            if (this.counter >= 10) {
                this.counter = 0; 
            } else {
                this.counter++;
            }
        },
    },
    template: `
        <button type="button" @click="count()" >{{ counter }}</button>
    `
    
}).mount('#app');


