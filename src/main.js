import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import VueSupabase from 'vue-supabase';


Vue.use(VueSupabase, {
  supabaseUrl: "https://rzxlomkrxsmkpfonrkmu.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eGxvbWtyeHNta3Bmb25ya211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MDkwMzIsImV4cCI6MTk2MjI4NTAzMn0.UhLFvHIdfT6QT6IMGpA9gz1JsHbgq6UpdeNsq-M7EUE",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
