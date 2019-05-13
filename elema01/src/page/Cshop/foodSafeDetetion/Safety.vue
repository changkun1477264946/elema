<template>
    <div class="wrapper">
        <zhead></zhead>
        <div class="head_ul">
            <header>工商登记信息</header>
            <ul>
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
            <header>餐饮许可证</header>
            <ul>
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
    export default {
        name: "Safety",
        components: {Zhead}
    }
</script>

<style scoped>

</style>
