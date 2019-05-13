<template>
    <div class="goodsss" :style="contentStyleObj">
        <Col class="leftShop" span="6">
            <a :href="'#'+data.name" @click="changeA(i)" :class="{leftAa:changeAa===i?true:false}" class="left"  v-for="(data,i) in datas" :key="i">{{data.name}}</a>
        </Col>
        <Col class="rightShop" span="18">
            <div v-for="(data,i) in datas" :key="i" class="cshop">
                <div class="chead" :id="data.name">{{data.name}}<span class="fs111">{{data.description}}</span></div>
                <div class="cbody" v-for="(food,k) in data.foods" :key="k">
                    <Col  class="cleft" span="5">
                        <img :src="'//elm.cangdu.org/img/'+food.image_path" alt="">
                    </Col >
                    <Col  class="cright" span="19">
                        <div class="r1">{{food.name}}</div>
                        <div class="r2">{{food.description}}</div>
                        <!--<div class="r3">{{food.tips}}</div>-->
                        <div class="r3">月售{{food.rating_count}}份 &nbsp;&nbsp; 好评率{{food.satisfy_rate}}%</div>
                        <div class="r5">
                            <span class="s1">¥{{food.specfoods[0].price}}</span>
                            <span class="s2">起</span>&nbsp;&nbsp;
                            <span class="s3 pull-right">选规格</span>
                        </div>
                    </Col >
                </div>
            </div>
        </Col>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: "Cshop",
        data(){
            return {
                datas:[],
                changeAa:0,
                contentStyleObj:{
                    height:''
                },
            }
        },
    // +this.$route.query.id
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res)=>{
                this.datas=res.data;
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            this.contentStyleObj.height=window.innerHeight-(2.6*20)-(5*20)+'px';
        },
        methods:{
            changeA(i){
                this.changeAa=i;
            },

        }
    }
</script>

<style scoped>
    .fs111{
        width: 100%;
        height: 100%;
        font-size: 0.4rem;
        margin-left: 0.6rem;
        font-weight: 200;
        color: #999;
    }
    .leftShop{
        font-size: 0.7rem;
        font-family: Microsoft Yahei,serif;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .rightShop{
        height: 100%;
        overflow-y: scroll;
    }
    .left{
        color: #666;
        font-weight: 500;
        display: block;
        /*text-align: center;*/
        text-indent: 0.4rem;
        padding: 0.7rem 0;
        border-bottom: solid #ededed 1px;
        border-left: solid transparent 0.15rem;
    }
    .leftAa{
        font-weight: 800;
        background-color: #fff;
        color: #333;
        text-decoration: none;
        border-left: solid #3190e8 0.15rem;

    }
    /*.goodsss{*/
    /*overflow:hidden;*/
    /*}*/
    .cshop{
        border-bottom: 1px solid #f8f8f8;
        position: relative;
    }
    .cshop .chead{
        padding: .4rem .4rem;
        font-size: .7rem;
        color: #666;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        font-family: Microsoft Yahei,sans-serif;
    }
    .cbody{
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
    }
    .cleft img{
        width: 100%;
    }
    .cright{
        text-indent: 0.4rem;
    }
    .r1{
        font-size: .9rem;
        color: #333;
        font-weight: 600;
    }
    .r2{
        font-size: .6rem;
        color: #999;
        line-height: .8rem;
    }
    .r3{
        line-height: 1rem;
        font-size: 0.6rem;
    }
    /*    .r4{
            line-height: .5rem;
            padding: .08rem;
            margin-left: -.35rem;
        }*/
    .r4 span{
        color: rgb(241, 136, 79);
        /*border-color: rgb(240, 115, 115);*/
        font-size: .4rem;
        padding: .1rem;
        border: 1px solid currentColor;
        border-radius: .5rem;
        text-indent: 0;
        display: inline-block;
        /*transform: scale(.8);*/
        text-align: center;
    }
    .r5 .s2{
        font-size: .5rem;
        color: #666;
    }
    .r5 .s3{
        margin-top: 0.4rem;
        display: block;
        font-size: .55rem;
        color: #fff;
        padding: .1rem .4rem 0.1rem 0.1rem;
        background-color: #3190e8;
        border-radius: .2rem;
        border: 1px solid #3190e8;

    }
    .r5 .s1{
        font-size: .7rem;
        color: #f60;
        font-weight: 700;
        margin-right: .1rem;

    }
</style>
