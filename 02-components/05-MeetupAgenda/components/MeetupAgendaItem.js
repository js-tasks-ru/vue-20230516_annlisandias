import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService';

export default defineComponent({
  name: 'MeetupAgendaItem',
  components: {
    agendaItemIcons, agendaItemDefaultTitles
  },
  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    displayTitle() {
      return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type];
    },
    displayIcon() {
      return agendaItemIcons[this.agendaItem.type];
    }
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="'/assets/icons/icon-' + displayIcon + '.svg'" class="icon" :alt="displayIcon" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ displayTitle }}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description !== undefined">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
