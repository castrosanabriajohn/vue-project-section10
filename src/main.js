import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/common/BaseCard.vue';

const app = createApp(App);
app.component(BaseCard);
app.mount('#app');
