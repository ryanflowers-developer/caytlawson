const c1 = () => import(/* webpackChunkName: "page--src-pages-faq-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\FAQ.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-events-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\Events.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-books-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\Books.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-author-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\Author.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\hexstone\\Desktop\\caytlawson\\caytlawson\\src\\pages\\Index.vue")

export default [
  {
    path: "/faq/",
    component: c1
  },
  {
    path: "/events/",
    component: c2
  },
  {
    path: "/books/",
    component: c3
  },
  {
    path: "/about/",
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
