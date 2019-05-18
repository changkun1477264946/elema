<template>
    <div class="zfood_page">
        <zhead>
            <div slot="logo">
                <router-link :to="{}">
                    <Icon type="ios-arrow-back"  color="white" size="35" @click="$router.go(-1)"/>
                </router-link>
            </div>
            <div slot="title"  >{{title}}</div>

        </zhead>
        <!---->
        <section class="zfood_sort">
            <div class="sort_item " @click="chooseType('food')">
                <div class="item_a" :class="{choose:itemtype == 'food'}">
                    {{foodtitle}}
                    <Icon type="md-arrow-dropdown" size="24" :class="{icon:itemtype == 'food'}"/>
                    <div class="list_item" v-show="itemtype == 'food'">
                        <ul class="item_left" >
                            <li @click.stop="itemclick(sort.id,index)" v-for="(sort,i) in allSort" :class="{bgc:listbgc === sort.id? true : false}" class="left_list">
                                <img :src="getPath(sort.image_url)" alt="" class="item_img">
                                <span class="item_fl">{{sort.name}}</span>
                                <span class="item_num item_num1">{{sort.count}}</span>
                                <Icon type="ios-arrow-forward" color="#CBCBCB" size="17"/>
                            </li>
                        </ul>
                        <ul class="item_right" >
                            <li class="right_list" v-for="(des,i) in allSortdes ">
                                <span class="item_fl">{{des.name}}</span>
                                <span class="right_num">{{des.count}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sort_item " @click="chooseType('sort')">
                <div  class="item_a " :class="{choose:itemtype == 'sort'}">
                    排序
                    <Icon type="md-arrow-dropdown"  size="24" :class="{icon:itemtype == 'sort'}"/>
                </div>
                <div class="list_sort" v-show="itemtype == 'sort'">
                    <ul class="sort_list" >
                        <li class="sort_li" @click="clickli(arr[0])">
                            <Col span="1" class="right_num"><Icon type="ios-cloud-download-outline" color="blue" size="20"/></Col>
                            <Col span="16" class="right_num"><span class="sort_list_type" :class="{libgc:changeli==1?true:false}">智能排序</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==1?'#3190E8 ':'white'" size="20"  ref="liicon"/></Col>

                        </li>
                        <li class="sort_li" @click="clickli(arr[1])">
                            <Col span="1" class="right_num"><Icon type="ios-pin-outline" color="#99CCFF" size="20"/></Col>
                            <Col span="16" class="right_num"><span class="sort_list_type" :class="{libgc:changeli==2?true:false}">距离最近</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==2?'#3190E8 ':'white'" size="20" /></Col>
                        </li>
                        <li class="sort_li" @click="clickli(arr[2])">
                            <Col span="1" class="right_num"><Icon type="ios-water-outline" color="#FF9999" size="20"/></Col>
                            <Col span="16" class="right_num"> <span class="sort_list_type" :class="{libgc:changeli==3?true:false}">销量最高</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==3?'#3190E8 ':'white'" size="20"/></Col>
                        </li>
                        <li class="sort_li" @click="clickli(arr[3])">
                            <Col span="1" class="right_num"><Icon type="logo-yen" color="#FFCC33" size="20"/></Col>
                            <Col span="16" class="right_num"><span class="sort_list_type" :class="{libgc:changeli==4?true:false}">起送价最低</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==4?'#3190E8 ':'white'" size="20"/></Col>
                        </li>
                        <li class="sort_li" @click="clickli(arr[4])">
                            <Col span="1" class="right_num"><Icon type="md-time" color="#33CC99" size="20"/></Col>
                            <Col span="16" class="right_num"><span class="sort_list_type" :class="{libgc:changeli==5?true:false}">配送速度最快</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==5?'#3190E8 ':'white'" size="20"/></Col>
                        </li>
                        <li class="sort_li" @click="clickli(arr[5])">
                            <Col span="1" class="right_num"><Icon type="md-heart-outline" color="#FFCC33" size="20"/></Col>
                            <Col span="16" class="right_num"><span class="sort_list_type" :class="{libgc:changeli==6?true:false}">评分最高</span></Col>
                            <Col span="" class="right_num"><Icon type="md-checkmark" :color="changeli==6?'#3190E8 ':'white'" size="20"/></Col>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sort_item " @click ="chooseType('screen')">
                <div  class="item_a" :class="{choose:itemtype == 'screen'}">
                    筛选
                    <Icon type="md-arrow-dropdown"  size="24" :class="{icon:itemtype == 'screen'}"/>
                </div>

                <div class="sx_list"  v-show="itemtype == 'screen'">
                    <div class="list_way">
                        <p class="sx_delivery">配送方式</p>
                        <ul >
                            <li class="sx_li" @click.stop=" btnclick(des.id)"  v-for="(des,i) in allPsWay">
                                <Icon type="ios-cloudy" color="#3190E8" v-if="num == -1? true: false"/>
                                <Icon type="md-checkmark" :color="changeli==des.id?'#3190E8 ':'white'" size="20" v-if="num == 0? true: false"/>
                                <span :class="{libgc:changeli==des.id}">{{des.text}}</span>
                            </li>

                        </ul>
                        <p class="store">商家属性(可以多选)</p>
                        <ul class="sx_store">
                            <li class="sx_store1" v-for="(data,i) in allStore" @click.stop="selectStore">
                                <span class="store_type" >{{data.icon_name}}</span>
                                <span >{{data.name}}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="sx_select">
                        <span>清空</span>
                        <span>确定</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="container">
            <div class="con_content" v-for="(data,i) in goodsList">
                <div class="con_photo">
                    <img :src="'//elm.cangdu.org/img/'+data.image_path" alt="" class="con_img">
                </div>
                <div class="con_right">
                    <div class="right_top">
                        <span>品牌</span>
                        <span>{{data.name}}</span>
                        <span v-for="item in data.supports">{{item.icon_name}}</span>
                    </div>
                    <div class="right_middle">
                        <span class="right_fj"><Icon type="md-star-outline" /><Icon type="md-star-outline" /><Icon type="md-star-outline" /><Icon type="md-star-outline" /><Icon type="md-star-outline" />{{data.rating}}</span>
                        <span class="ys">月售{{data.recent_order_num}}单</span>
                        <span>蜂鸟专送 <span class="zh">准时达</span></span>
                    </div>
                    <div class="right_bottom">
                        <span>
                            <Icon type="logo-yen" />{{data.float_minimum_order_amount}}起送/配送费约
                            <Icon type="logo-yen" />{{data.float_delivery_fee}}</span>
                        <span>{{data.distance}}/<span class="hour">{{data.order_lead_time}}</span></span>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "zfood",
        data(){
            return {
                //头部信息
                title:'',
                //下拉框名称
                foodtitle:'',
                //判断类型
                itemtype:"",
                //分类
                allSort:{},
                //li的背景颜色
                listbgc:'',
                allSortdes:{},
                index:null,
                arr:[1,2,3,4,5,6],
                changeli:"",
                //配送方式
                allPsWay:{},
                //商家信息
                allStore:{},
                //食品列表
                goodsList:{},
                //筛选
                num:0
            }
        },
        mounted(){
            this.title= this.$route.query.title;
            this.foodtitle=this.title;
            //发起网络请求 获取数据
            Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes').then((response)=>{
                this.allPsWay=response.data;
                //console.log(this.allPsWay);
            }).catch((error)=>{
                console.log('请求错误',error)
            });
            Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes').then((response)=>{
                this.allStore=response.data;
                console.log(this.allStore,"pppp");
            }).catch((error)=>{
                console.log('请求错误',error)
            });
            Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.latitude+'&longitude='+this.$store.state.longitude).then((response)=>{
                console.log(response.data);
                this.goodsList = response.data
            }).catch((error)=>{
                console.log('请求错误' ,error);
            });
        },
        methods:{
            // 头部三个下拉框
            chooseType(type){
                console.log(this.title);
                if (this.itemtype !== type) {
                    this.itemtype= type;
                    if (type == "food") {
                        this.foodtitle = "分类";
                    }
                } else {
                    this.itemtype = "";
                    if (type == "food") {
                        this.foodtitle = this.title;
                    }
                }
                //发起网络请求 获取数据
                Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((response)=>{
                    this.allSort=response.data;
                }).catch((error)=>{
                    console.log('请求错误',error)
                })
            },
            //改变li中背景颜色 跳转
            itemclick(id,index){
                this.listbgc=id;
                this.allSort.forEach(item => {
                    if (this.listbgc == item.id) {
                        this.allSortdes = item.sub_categories;
                    }
                });
                this.allSortdes.shift();
            },
            //图片地址
            getPath(path){
                if(!path){
                    return "https://elm.cangdu.org/img/default.jpg"
                }
                let lx=path.slice(path.length-3)== 'png' ? 'png':(path.slice(path.length-3) == 'jpg' ? 'jpg' : 'jpeg');
                let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.slice(3) +'.'+lx;
                return 'https://fuss10.elemecdn.com' + url;
            },
            //排序
            clickli(e){
                this.changeli=e;
            },
            //配送方式
            btnclick(e){
                if(this.changeli==null){
                    this.num++;
                    this.changeli=e
                }else if(this.changeli=e){
                    this.num--;
                    this.changeli=null
                } else{
                    this.changeli=e
                }
                // console.log(this.num)
            },
            // selectStore(){
            //
            // }
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    body{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
    }
    html{
        overflow: hidden;
    }
    a{
        text-decoration: none;
    }
    .zfood_sort{
        width: 100%;
        height: 1.875rem;
        margin-top: 2.3rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.05rem solid lightgray;
        position: fixed;
    }
    .sort_item{
        width: 6.2rem;
        border-right: 0.05rem solid lightgray;
        background: white;
    }
    .item_a{
        font-size: 0.7rem;
        color: #333;
        font-weight: 400;
        text-align: center;
        padding-top:0.25rem;
    }
    .choose{
        color:#3190E8;
    }
    .icon{
        transform: rotate(180deg);
        color: #3190E8;
        animation: all 2s ;
    }
    .list_item{
        margin-top: 0.55rem;
        width: 18.75rem;
        height: 18.75rem;
        position: fixed;
    }
    .item_left{
        float: left;
        width: 9rem;
        height: 18.75rem;
        text-align: left;
        background: #eeeeee;
        color: #333;
        font-size: 0.6rem;
        line-height: 2.1rem;
    }
    .left_list{
        padding-left: 0.5rem;
    }
    .item_right{
        float:left;
        width: 9.65rem;
        height:18.75rem ;
        background: white;
        color: #666;
        text-align: left;
        padding-left: 0.5rem;
        line-height: 2.1rem;
        overflow-y: scroll;
        white-space: nowrap;
        font-size: 0.6rem;
    }
    .right_num{
        margin-right: 0.5rem;
    }
    .right_list{
        display: flex;
        justify-content: space-between;
        border-bottom: 0.05rem solid #cbcbcb;
    }
    .item_num{
        background: lightgray;
        border-radius: 30%;
        text-align: right;
        padding:0.1rem;
        margin-left: 1.5rem;
        color: white;
    }
    .item_num1 {
        margin-left: 2rem;
    }
    .item_img{
        width: 0.9rem;
        height: 0.9rem;
        padding-left: 0.25rem;
    }
    .item_fl{
        margin-left: 0.25rem;
    }
    .bgc{
        background: white;
    }
    .list{
        display: none;
    }
    .list_sort{
        width: 18.75rem;
        height: 17.55rem;
        background: white;
        margin-top: 0.4rem;
        float: left;
        position: absolute;
        left:0;
        right: 0;
    }
    .sort_list{
        font-size: 0.6rem;
        line-height: 2.85rem;
        margin-left: 0.75rem;
        color: #a9a9a9;
    }
    .sort_li{

        border-bottom: 0.1rem solid #eeeeee;
    }
    .libgc{
        color:#3190E8 ;
    }
    .sx_list{
        width: 18.75rem;
        height: 12.7rem;
        background: #eeeeee;
        margin-top: 0.3rem;
        float: left;
        position: absolute;
        left:0;
        right: 0;

    }
    .list_way{
        width: 18.75rem;
        height:9.9rem;
        background: white;
        padding-left: 0.45rem;
        font-size: 0.6rem;
        padding-top: 0.5rem;
    }
    .sx_li{
        width: 5.5rem;
        height: 1.6rem;
        border: 0.05rem solid #e4cffa;
        border-radius: 0.15rem;
        text-align: center;
        line-height: 1.5rem;
    }
    .store{
        padding-top: 0.5rem;
    }
    .sx_store{
        height: 3.5rem;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .sx_store li{
        width: 4.6rem;
        height: 1.6rem;
        border: 0.05rem solid #e4cffa;
        border-radius: 0.15rem;
        text-align: center;
        line-height: 1.5rem;
    }
    .sx_store1{
        margin-left: 0.25rem;
    }
    .store_type{
        padding: 0.05rem;
        border-radius: 0.15rem;
        border: 0.05rem solid blue;
    }
    .sx_select{
        padding: 0.5rem 0.25rem;
    }
    .sx_select span{
        padding:0.25rem 2.9rem;
        border-radius: 0.25rem;
    }
    .sx_select span:nth-child(1){
        background: white;
    }
    .sx_select span:nth-child(2){
        background: #56d176;
        color: white;
    }
    .container{
        padding-top: 4.5rem;
    }
    .con_content{
        height: 5.2rem;
        padding-top: 0.75rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.05rem solid #f5efff;
    }
    .con_photo{
        width:3.15rem;
        height: 3.15rem;
    }
    .con_img{
        width:3.15rem;
        height: 3.15rem;
    }
    .con_right{
        width: 12rem;
        font-size: 0.7rem;
        padding-left: 0.2rem;
    }
    .right_top{
        font-size: 0.6rem;
        display: flex;
        justify-content: space-between;
    }
    .right_top span:nth-child(1){
        width: 1.4rem;
        height: 0.7rem;
        font-weight: 600;
        border-radius: 0.15rem;
        margin-top: 0.15rem;
        background: #ffe551;
    }
    .right_top span:nth-child(2){
        font-size: 0.7rem;
        font-weight: 600;
        width: 9.95rem;
    }
    .right_top span:nth-child(3){
        text-align: right;
        letter-spacing: 0.1rem;
    }
    .right_middle{
        font-size: 0.5rem;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .right_middle .right_fj{
        color: #ffac3a;
    }
    .right_middle span:nth-child(3){
        background:#3190e8;
        color: white;
        border-radius: 0.15rem;
    }
    .right_middle .ys{
        margin-left: -2.5rem;
    }
    .right_middle .zh{
        border: 0.05rem solid #3190e8;
        border-radius: 0.15rem;
        background: white;
        color: #3190e8;
    }
    .right_bottom{
        font-size: 0.3rem;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .hour{
        color:#3190e8 ;
    }
</style>
