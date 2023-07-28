import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert';
import UiContainer from './UiContainer.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda';
import MeetupAgendaItem from '../../05-MeetupAgenda/components/MeetupAgendaItem';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription, MeetupCover, MeetupAgendaItem, MeetupAgenda,
    MeetupInfo, 
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <!-- meetup cover-->
      <MeetupCover :title="meetup.title" :image="meetup.image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description" />
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <div>
            <MeetupAgenda v-if="meetup.agenda && meetup.agenda.length > 0" :agenda="meetup.agenda" />
            <UiAlert v-else>Программа пока пуста...</UiAlert>
            </div>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
