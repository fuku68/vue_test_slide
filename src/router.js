import Vue from 'vue';
import Router from 'vue-router';
import TaskList from './views/TaskList.vue';
import TaskProcess from './views/TaskProcess.vue';
import ProcessEnd from './views/ProcessEnd.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task list',
      component: TaskList,
    },
    {
      path: '/task',
      name: 'taskprocess',
      component: TaskProcess,
    },
    {
      path: '/processend',
      name: 'ProcessEnd',
      component: ProcessEnd,
    },
  ],
});
