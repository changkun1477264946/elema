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


import forget from '../page/forget/forget'
import detail from '../page/balance/children/detail'
import benefit from '../page/benefit/benefit'
import infor from '../page/profile/children/infor'
import setusername from '../page/profile/children/children/setusername'
import vipcard from '../page/vipcard/vipcard'
import exchange from '../page/benefit/children/exchange'
import hbhistory from '../page/benefit/children/hbhistory'
import zaddress from '../page/profile/children/children/address'
import add from '../page/profile/children/children/children/add'
import addDetail from '../page/profile/children/children/children/children/addDetail'
import service from '../page/service/service'
import useCart from '../page/vipcard/children/useCart'
import download from '../page/download/download'
import invoiceRecord from '../page/vipcard/children/invoiceRecord'
import commend from '../page/benefit/children/commend'
import points from '../page/points/points'



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

        {path:'/zfood',component:zfood},
        {path:'/profile',component:profile,children:[{path:'infor',component:infor,children:[{path:'setusername',component:setusername},{path:'zaddress',component:zaddress,children:[{path:'add',component:add,children:[{path:'addDetail',component:addDetail}]}]}]}]},
        {path:'/balance',component:balance, children:[{path:'detail',component:detail}]},
        {path:'/login',component:login},
        {path:'/forget',component:forget},
        {path:'/benefit',component:benefit,children:[{path:'exchange',component:exchange},{path:'hbhistory',component:hbhistory},{path:'commend',component:commend}]},
        {path:'/vipcard',component:vipcard,children:[{path:'usecart',component:useCart},{path:'invoiceRecord',component:invoiceRecord}]},
        {path:'/service',component:service},
        {path:'/download',component:download},
        {path:'/points',component:points}

    ]
})
