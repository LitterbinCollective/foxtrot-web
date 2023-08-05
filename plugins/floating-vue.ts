import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import '@/assets/styles/plugins/floating-vue.scss';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(FloatingVue, {
    themes: {
      'ft-tooltip': {
        $extend: 'tooltip',
      }
    }
  });
});