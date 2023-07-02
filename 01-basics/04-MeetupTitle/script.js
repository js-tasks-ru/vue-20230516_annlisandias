import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

createApp({
  data() {
      return {
          meetupId: 1,
          currentMeetupTitle: null
      }
  },
  watch: {
    meetupId: {
      handler(newValue, oldValue) {
        if(newValue) {
            fetchMeetupById(newValue).then((data) => {
              this.currentMeetupTitle = data.title;
            });
        }
      },
      immediate: true
    }
  },
  template: `
    <div>
      <label v-for="n in 5"><input v-model="meetupId" type="radio" name="meetupId" :value="n" /> {{ n }}</label>
      <hr />
      <h3>{{ currentMeetupTitle }}</h3>
    </div>
  `
}).mount('#app');
