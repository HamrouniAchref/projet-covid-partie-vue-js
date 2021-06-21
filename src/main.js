import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'
import Index from './Index.vue'

const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }
import Form from './components/Form.vue'
import Symptoms from './components/Symptoms.vue'
import About from './components/About.vue'
import Vaccin from './components/Vaccin.vue'
import ApiTest from './components/ApiTest.vue'
import Stat from './components/Stat.vue'








const routes = [
  
    {
      path: "/symptoms",
      component: Symptoms,
      name:'sym'
    },
    {
        path: "/",
        component: Index,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/vaccin/:id",
        component: Vaccin,
        name: 'vaccin',
   


        
      },
      {
        path: "/apiTest",
        component: ApiTest,
      },
      {
        path: "/stats",
        component: Stat,
      },
      { path: "/:pathMatch(.*)*", redirect: "/" },
    
  ];
  
  const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,



  });
const vm= createApp(App).use(router).mount('#app')
