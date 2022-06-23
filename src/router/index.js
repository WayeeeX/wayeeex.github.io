import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Write from "../components/Write.vue";
import BlogDetail from '../components/BlogDetail.vue'

Vue.use(Router);
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/write",
    name: "write",
    component: Write
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  }
];
export default new Router({
  mode: "history",
  routes
});
