// router.js

import { createRouter, createWebHistory } from 'vue-router';

// ส่วนของ index
import Login from './components/login.vue';
import Test from './components/test.vue';
import Register from './components/register.vue';
import index from './components/index.vue';
import contact from './components/contact.vue';
import room from './components/room.vue';

//ส่วนของ member
import indexmember from './components/member/indexmember.vue';
import roommember from './components/member/roommember.vue';
import contactmember from './components/member/contactmember.vue';
import reservemember from './components/member/reservemember.vue';
import payreservemember from './components/member/payreservemember.vue';

//ส่วนของ staff
import indexstaff from './components/staff/indexstaff.vue';
import addmemberstaff from './components/staff/addmemberstaff.vue';
import roomstaff from './components/staff/roomstaff.vue';
import reservestaff from './components/staff/reservestaff.vue';
import payreservestaff from './components/staff/payreservestaff.vue';


//ส่วนของ admin 
import indexadmin from './components/admin/indexadmin.vue';
import updatememberadmin from './components/admin/updatememberadmin.vue';
import updateroomadmin from './components/admin/updateroomadmin.vue';
import reserveadmin from './components/admin/reserveadmin.vue';

const routes = [
  //ส่วน index
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/room',
    name: 'room',
    component: room
  },

  //ส่วน member
  {
    path: '/indexmember',
    name: 'indexmember',
    component: indexmember,
  },
  {
    path: '/roommember',
    name: 'roommember',
    component: roommember,
  },
  {
    path: '/contactmember',
    name: 'contactmember',
    component: contactmember,
  },
  {
    path: '/reservemember/:roomId',
    name: 'reservemember',
    component: reservemember,
  },
  {
    path: '/payreservemember',
    name: 'payreservemember',
    component: payreservemember,
  },

  //ส่วน staff
  {
    path: '/indexstaff',
    name: 'indexstaff',
    component: indexstaff,
  },
  {
    path: '/addmemberstaff',
    name: 'addmemberstaff',
    component: addmemberstaff,
  },
  {
    path: '/roomstaff',
    name: 'roomstaff',
    component: roomstaff,
  },
  {
    path: '/reservestaff/:roomId',
    name: 'reservestaff',
    component: reservestaff,
  },
  {
    path: '/payreservestaff',
    name: 'payreservestaff',
    component: payreservestaff,
  },

  //ส่วน admin
  {
    path: '/indexadmin',
    name: 'indexadmin',
    component: indexadmin,
  },
  {
    path: '/updatememberadmin',
    name: 'updatememberadmin',
    component: updatememberadmin,
  },
  {
    path: '/updateroomadmin',
    name: 'updateroomadmin',
    component: updateroomadmin,
  },
  {
    path: '/reserveadmin',
    name: 'reserveadmin',
    component: reserveadmin,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
