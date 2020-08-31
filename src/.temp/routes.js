const c1 = () => import(/* webpackChunkName: "page--src--pages--newsletter-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/Newsletter.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/FAQ.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--events-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/Events.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--books-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/Books.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--author-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/Author.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/hexstone/Documents/Projects/Cayt Lawson/caytlawson/src/pages/Index.vue")

export default [
  {
    path: "/newsletter/",
    component: c1
  },
  {
    path: "/faq/",
    component: c2
  },
  {
    path: "/events/",
    component: c3
  },
  {
    path: "/books/",
    component: c4
  },
  {
    path: "/author/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
