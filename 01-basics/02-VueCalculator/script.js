import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
    data() {
        return {
            first_number: 0,
            second_number: 0,
            operator: null
        }
    },
    computed: {
        result() {
            if (this.operator === 'sum') {
                return this.first_number + this.second_number;
            }
            if (this.operator === 'subtract') {
                return this.first_number - this.second_number;
            }
            if (this.operator === 'multiply') {
                return this.first_number * this.second_number;
            }
            if (this.operator === 'divide') {
                return this.first_number / this.second_number;
            }
        }
    },
    template: `
        <div class="row">
            <div class="col">
                <input type="number" v-model="first_number" />
            </div>

            <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
                <label><input type="radio" v-model="operator" name="operator" value="sum" /> ➕</label>
                <label><input type="radio" v-model="operator" name="operator" value="subtract"  /> ➖</label>
                <label><input type="radio" v-model="operator" name="operator" value="multiply" /> ✖</label>
                <label><input type="radio" v-model="operator" name="operator" value="divide" /> ➗</label>
            </div>

            <div class="col">
                <input type="number" v-model="second_number" />
            </div>

            <div class="col">=</div>

            <output class="col">
                {{ result }}
            </output>
        </div>
    `
    
}).mount('#app');