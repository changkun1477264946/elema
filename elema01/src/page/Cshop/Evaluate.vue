<template>
    <div class="wrapper" :style="contentStyleObj">
        <score :scoreId="$parent.$route.query.id"></score>
        <div class="border">
            <div class="tag_list_ul">
                <li :class="{tagActivity:(a1===i),unsatisfied:(data.name==='不满意')}" @click="arr(i)" v-for="(data,i) in datas1" :key="i">{{data.name}}({{data.count}}) </li>
            </div>
        </div>
        <div class="border">
            <div class="foot_ul" v-for="(data,i) in datas2" :key="i">
                <div class="foot_li">
                    <div class="foot_left">
                        <img class="user_avatar" src="https://elm.cangdu.org/img/default.jpg">
                    </div>
                    <div class="foot_right">
                        <div class="header">
                            <p>
                                <span class="username">{{data.food_name}}</span>
                                <span class="rated_at">{{data.rated_at}}</span>
                            </p>
                            <p>
                                <span class="rata"> <Rate disabled v-model="data.rating_star" class="star"/></span>
                                <span class="time_spent_desc">{{data.time_spent_desc}}</span>
                            </p>
                        </div>
                        <div class="content">
                            <span  v-for="(d,k) in data.item_ratings" :key="k"><img :src="'https://fuss10.elemecdn.com/'+d.image_hash.slice(0,1)+'/'+d.image_hash.slice(1,3)+'/'+d.image_hash.slice(3)+'.jpeg'" alt=""></span>
                        </div>
                        <div class="footer">
                            <span  v-for="(d,k) in data.item_ratings" :key="k">{{d.food_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue';
    import Score from "../../components/common/score";
    export default {
        name: "Evaluate",
        components: {Score},
        data(){
            return {
                a1:0,
                datas1:[],
                datas2:[],
                contentStyleObj:{
                    height:''
                },
            }
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$route.query.id+'/ratings/tags').then((res)=>{
                this.datas1=res.data;
                // console.log(res.data,111)
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$route.query.id+'/ratings?offset=0&limit=10').then((res)=>{
                this.datas2=res.data;
                // console.log(res.data,222)
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            this.contentStyleObj.height=window.innerHeight-(2.6*20)-(5*20)+'px';
        },
        methods:{
            arr(i){
                this.a1=i;
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .border{
        border-bottom: 0.001rem solid gray;
        width: 100%;
    }
    .foot_right{
        width: 100%;
        padding-right: 0.3rem;
    }
    .rata{
        position: relative;
        right: 1rem;
        top: 0;
    }
    .star{
        transform: scale(0.6);
        /*float: left;*/
    }
    .tag_list_ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-color: #fff;
        padding: .5rem;
    }
    .tag_list_ul li {
        font-size: .6rem;
        color: #6d7885;
        padding: .3rem;
        background-color: #ebf5ff;
        border-radius: .2rem;
        border: 1px;
        margin: 0 .4rem .2rem 0;
    }
    .tag_list_ul .unsatisfied {
        background-color: #f5f5f5;
        color: #aaa;
    }
    .foot_ul{
        background-color: #fff;
        padding: 0 .5rem;
    }
    .tag_list_ul .tagActivity{
        background-color: #3190e8;
        color: #fff;
    }
    .foot_li{
        border-top: 1px solid #f1f1f1;
        display: flex;
        padding: .6rem 0
    }
    .user_avatar {
        width: 1.5rem;
        height: 1.5rem;
        border: .025rem;
        border-radius: 50%;
        margin-right: .8rem;
    }
    .username{
        color: #666;
        margin-bottom: .2rem;
    }
    .rated_at{
        margin-left: 0.4rem;
        font-size: .4rem;
        color: #999;
        text-align: right;
        display: block;

    }
    .time_spent_desc{
        font-size: .55rem;
        color: #666;
        margin-left: .15rem;
    }
    .content img{
        width: 3rem;
        height: 3rem;
        margin-right: .4rem;
    }
    .footer span{
        font-size: .55rem;
        color: #999;
        width: 2.2rem;
        padding: .2rem;
        border: .025rem solid #ebebeb;
        border-radius: .15rem;
        margin-right: .3rem;
        margin-bottom: 4px;
    }

</style>
