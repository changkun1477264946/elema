<template>
    <div class="container11">
        <!--头部-->
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">订单备注</div>
        </zhead>
        <!--快速备注-->
        <div class="remarkFast">
            <div class="remarkFast_head">快速备注</div>
            <div class="remarkFast_body">
                <div class="div1">
                    <div class="chooseSpicy pull-left">
                        <span class="chooseSpicy_sp1" :class="{sphover:show1 === '不要辣'}" @click="changeSpicy('不要辣')">不要辣</span>
                        <span class="chooseSpicy_sp2" :class="{sphover:show1 === '少点辣'}" @click="changeSpicy('少点辣')">少点辣</span>
                        <span class="chooseSpicy_sp3" :class="{sphover:show1 === '多点辣'}" @click="changeSpicy('多点辣')">多点辣</span>
                    </div>
                    <span class="chooseSpicy_sp1 chooseSpicy_sp3 sp" :class="{sphover:show2 ==='不要香菜'}" @click="show2 = '不要香菜'">不要香菜</span>
                </div>
                <div class="div1">
                    <span class="chooseSpicy_sp1 chooseSpicy_sp3" :class="{sphover:show3=== '不要洋葱'}" @click="show3 = '不要洋葱'">不要洋葱</span>
                    <span class="chooseSpicy_sp1 chooseSpicy_sp3 sp" :class="{sphover:show4=== '多点醋'}" @click="show4 = '多点醋'">多点醋</span>
                    <span class="chooseSpicy_sp1 chooseSpicy_sp3 sp" :class="{sphover:show5 === '多点葱'}" @click="show5 = '多点葱'">多点葱</span>
                </div>
                <div class="div1">
                    <span class="chooseSpicy_sp1" :class="{sphover:show6==='多冰'}" @click="show6= '多冰'">多冰</span>
                    <span class="chooseSpicy_sp3" :class="{sphover:show6==='少冰'}" @click="show6= '少冰'">少冰</span>
                </div>
            </div>
        </div>
        <!--其他备注-->
        <div class="remarkElse">
            <div class="remarkElse_title">其他备注</div>
            <textarea class="remarkElse_textArea" name="remarkElse_textArea" placeholder="请输入备注信息(可不填)" v-model="textValue">
            </textarea>
        </div>
        <!--确认按钮-->
        <button class="submitBtn" @click="submitBtn">确定</button>
    </div>
</template>

<script>
    import Zhead from "../../components/header/head";
    export default {
        name: "orderRemake",
        components: {Zhead},
        data(){
            return {
                show1:"",
                show2:"",
                show3:'',
                show4:'',
                show5:'',
                show6:'',
                textValue:'',
            }
        },
        methods:{
            changeSpicy(i){
               this.show1 = i;
            },
            submitBtn(){
                let arr = [this.show1,this.show2,this.show3,this.show4,this.show5,this.show6];;
                this.$store.commit('byRemarkText',arr);
                this.$store.commit('byInputText',this.textValue);
                this.$router.push({path:'/order'})
            }
        }
    }
</script>

<style scoped>
    .container11{
        position: fixed;
        top: 2.3rem;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 111;
    }
    .logo{
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding-left: 0.5rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    .remarkFast{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .6rem 1rem;
    }
    .remarkFast_head{
        font-size: .65rem;
        color: #333;
        line-height: 2rem;
    }
    .remarkFast_body{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.1rem;
    }
    .remarkFast_body span{
        font-size: .6rem;
        color: #333;
        padding: .3rem .6rem;
        border: .025rem solid #3190e8;
        border-left: 0;
        float: left;
    }
    .remarkFast_body .chooseSpicy_sp1{
        border-left: .025rem solid #3190e8;
        border-top-left-radius: .2rem;
        border-bottom-left-radius: .2rem;
    }
    .remarkFast_body .chooseSpicy_sp3{
        border-top-right-radius: .2rem;
        border-bottom-right-radius: .2rem;
    }
    .remarkFast_body .sp{
        margin-left: 0.6rem;
    }
    .remarkFast_body .div1{
        margin: 0.3rem 0;
    }
    .remarkFast_body .sphover{
        color: #fff;
        background-color: #3190e8;
    }
    .remarkElse{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .6rem 1rem;
    }
    .remarkElse_title{
        font-size: .65rem;
        color: #333;
        line-height: 2rem;
    }
    .remarkElse_textArea{
        width: 100%;
        background-color: #f9f9f9;
        border: .025rem solid #eee;
        resize: none;
        min-height: 4.5rem;
        border-radius: .2rem;
        font-size: .6rem;
        color: #666;
        padding: .5rem;
    }
    .submitBtn{
        display: block;
        width: 90%;
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        line-height: 1.8rem;
        border-radius: .2rem;
    }
</style>
