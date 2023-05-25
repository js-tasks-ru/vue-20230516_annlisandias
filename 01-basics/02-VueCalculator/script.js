import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
    data() {
        return {
            first_number: 0,
            second_number: 0,
            result: 0
        }
    },
    methods: {
        sum() {
            return first_number + second_number;
        },
        subtract() {
            return first_number - second_number;
        },
        multiply() {
            return first_number * second_number;
        },
        divide() {
            return first_number / second_number;
        },
    },
    template: `
        <div class="row">
            <div class="col">
                <input type="number" v-model="first_number" />
            </div>

            <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
                <label><input type="radio" name="operator" value="sum" @click="sum()" /> ➕</label>
                <label><input type="radio" name="operator" value="subtract" @click="subtract()" /> ➖</label>
                <label><input type="radio" name="operator" value="multiply" @click="multiply()" /> ✖</label>
                <label><input type="radio" name="operator" value="divide" @click="divide()" /> ➗</label>
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