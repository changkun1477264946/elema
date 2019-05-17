import Vue from 'vue';
import Router from 'vue-router';
import Ctype from '../page/Ctype/Ctype';
import Cshop from '../page/Cshop/Cshop';
import Evaluate from '../page/Cshop/Evaluate';
import home from '../page/home/home'
import login from '../page/login/login'
import balance from '../page/balance/balance'
import food from '../page/food/Food'
import orderList from '../page/orderList/orderList'
import zfood from '../page/zfood/zfood'
import profile from '../page/profile/profile'
import shoppingInfor from '../page/shoppingInfor/shoppingInfor'
import shoppingCart from '../components/common/shoppingCart'
import City from '../page/city/City'
import goChooseCityPage from '../page/city/goChooseCityPage'
import search from '../page/search/search'
import order from '../page/Order/order'
import orderRemake from '../page/Order/orderRemake'
import orderBill from '../page/Order/orderBill'
import searchAddressPage from '../page/Order/searchAddressPage'
import addAddressPage from '../page/addAddressPage/addAddressPage'
import searchAddressDetailed from '../page/addAddressPage/searchAddressDetailed'
import payMoney from '../page/Order/payMoney'


Vue.use(Router);
export default new Router({
    routes: [
        {path:'/',redirect:{path:'/home'},},
        {path:'/home',component:home},
        {path:'/ctype',component:Ctype,children:[
                {path:'/ctype',redirect:{path:'/ctype/cshop'},},
                {path:'cshop',component:Cshop},
                {path:'evaluate',component:Evaluate},
            ]},
        {path:'/food',component:food},
        {path:'/orderList',component:orderList},
        {path:'/zfood',component:zfood},
        {path:'/profile',component:profile},
        {path:'/balance',component:balance},
        {path:'/login',component:login},
        {path:'/city',component:City},
        {path:'/goChooseCityPage',component:goChooseCityPage},
        {path:'/payMoney',component:payMoney},
        {path:'/search',component:search},
        {path:'/shoppinginfor',component:shoppingInfor},
        {path:'/shoppingCart',component:shoppingCart},
        {path:'/searchAddressDetailed',component:searchAddressDetailed},
        {path:'/addAddressPage',component:addAddressPage},
        {path:'/order',component:order,children:[
                {path:'orderRemake',component:orderRemake},
                {path:'orderBill',component:orderBill},
                {path:'searchAddressPage',component:searchAddressPage},
            ]},

    ]
})
