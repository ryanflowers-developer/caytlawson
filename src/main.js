// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import DefaultLayout from '~/layouts/Default.vue'
import './assets/styles.css'


export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://sibforms.com/forms/end-form/build/sib-styles.css',
  })

  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  });



 
  const opts = { 
    iconfont: 'md' || 'mdi'

  } //opts includes, vuetify themes, icons, etc.

  
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}