import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU0FNUTtujwKXJ-FFrA3TRUTimVKUeTtQ",
  authDomain: "vuecosmetics-13e7b.firebaseapp.com",
  projectId: "vuecosmetics-13e7b",
  storageBucket: "vuecosmetics-13e7b.appspot.com",
  messagingSenderId: "566633904417",
  appId: "1:566633904417:web:28dc20d0dff23a0c1ae660",
  measurementId: "G-5Q6HRXVSTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
