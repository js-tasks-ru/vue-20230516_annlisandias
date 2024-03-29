import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem
  },
  props: {
    agenda: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul class="agenda">
      <MeetupAgendaItem v-for="(agendaItem, index) in agenda" :key="agendaItem.id" :agendaItem="agendaItem">
      </MeetupAgendaItem>
    </ul>`,
});
