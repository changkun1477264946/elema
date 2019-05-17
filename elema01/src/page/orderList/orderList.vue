<template>
    <div>
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">订单列表</div>
        </zhead>
        <footGuide></footGuide>
    </div>
</template>

<script>
    import Zhead from "../../components/header/head";
    import FootGuide from "../../components/footer/footGuide";
    export default {
        name: "orderList",
        components: {FootGuide, Zhead},
    }
</script>

<style scoped>
    .logo{
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding-left: 0.2rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
</style>
