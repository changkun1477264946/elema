import Vue from 'vue';
import Router from 'vue-router';
import Ctype from '../page/Ctype/Ctype';
import Cshop from '../page/Cshop/Cshop';
import Evaluate from '../page/Cshop/Evaluate';
import Safety from '../page/Cshop/foodSafeDetetion/Safety';
import home from '../page/home/home'
import login from '../page/login/login'
import balance from '../page/balance/balance'
import food from '../page/food/Food'
import zfood from '../page/zfood/zfood'
import profile from '../page/profile/profile'
Vue.use(Router);
export default new Router({
  routes: [
      {path:'/',redirect:{path:'/ctype',query:{id:1}},},
      {path:'/ctype',component:Ctype,children:[
              {path:'cshop',component:Cshop},
              {path:'evaluate',component:Evaluate},
              {path:'safety',component:Safety},
          ]},
      // {path:'/',redirect:'/food'},
      {path:'/food',component:food},
      {path:'/zfood',component:zfood},
      {path:'/city',component:login},
      {path:'/profile',component:profile},
      {path:'/balance',component:balance},
      {path:'/login',component:login}
  ]
})
