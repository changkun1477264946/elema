<template>
    <div class="wrapper">
        <zhead>
            <div slot="logo"  @click="$parent.insafety1">
            <!--<router-link slot="logo" :to="{}">/-->
                <Icon type="ios-arrow-back"  size="30" color="white"/>
            <!--</router-link>-->
            </div>
            <div slot="title">商家详情</div>
        </zhead>
        <food-safe></food-safe>
        <div class="head_ul">
            <header class="head_b">工商登记信息</header>
            <ul class="head_b">
                <li>企业名称</li>
                <li>工商执照注册号</li>
                <li>注册资本</li>
                <li>注册地址</li>
                <li>属地监管所</li>
                <li>法定代表人</li>
                <li>经营范围</li>
            </ul>
        </div>
        <div class="foot_ul">
            <header class="head_b">餐饮许可证</header>
            <ul class="head_b">
                <li>营业范围</li>
                <li>许可证有效期</li>
                <li>许可证号</li>
                <li>发证时间</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Zhead from "../../../components/header/head";
    import FoodSafe from "../../../components/common/foodSafe";
    export default {
        name: "Safety",
        components: {FoodSafe, Zhead}
    }
</script>

<style scoped>
    .wrapper{
        position: fixed;
        top: 2.3rem;
        left: 0;
        right: 0;
    }
    .head_ul{
        background-color: #fff;
        margin-bottom: .4rem;
    }
    .foot_ul{
        background-color: #fff;
    }

    .head_h{
        line-height: 1.8rem;
        padding: 0 .6rem;
        border-bottom: .025rem solid #f1f1f1;
        font-size: .75rem;
        color: #333;
    }
    .head_b{
        margin-left: 1rem;
        padding: .4rem 0;
    }
    .head_b li{
        font-size: .55rem;
        color: #333;
        line-height: 1.3rem;
    }
</style>
