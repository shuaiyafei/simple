import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => {
        sessionStorage.setItem('loginStatus', '0');
        return import('./views/Login.vue');
      }
    },
    {
      path: '/content',
      name: 'Content',
      component: () => {
        // 登录校验
        if (sessionStorage.getItem('loginStatus') === '1') {
          return import('./views/Content.vue');
        } else {
          window.location.href = '/';
        }
      }
    }
  ]
});
