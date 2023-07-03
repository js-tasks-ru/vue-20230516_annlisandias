import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  computed: {
    coverStyle() {
      if(this.image !== null && this.image !== undefined) {
        return `--bg-url: url('${this.image}');`
      }
    }
  },
  template: `
    <div class="meetup-cover" :style="coverStyle">
        <!-- Ссылка выше - пример верстки при наличии изображения, а не изображение по умолчанию. -->
        <!-- Изображение по умолчанию уже есть в стилях. Для его вывода достаточно не добавлять никаких стилей. -->
        <h1 class="meetup-cover__title">Title</h1>
    </div>`,
});
