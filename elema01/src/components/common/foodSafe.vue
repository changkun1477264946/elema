<template>
    <div class="contain">
        <div class="head">食品监督安全 <span> <slot name="title"></slot> ＞ </span></div>
        <div class="body">
            <Row>
                <Col span="4" class="c1">{{'heel'}}</Col>
                <Col span="20">
                    <div class="div1">监督检查结果: <span>{{'好'}}</span></div>
                    <div class="div1">检查日期: <span>1991</span></div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foodSafe"
    }
</script>

<style scoped>
    .contain{
        background-color: #fff;
    }
    .head{
        font-size: .75rem;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 1.8rem;
        padding: 0 .6rem;
        border-bottom: .025rem solid #f1f1f1;
    }
    .head span{
        font-size: .7rem;
        color: #bbb;
        vertical-align: middle;
    }
    .body{
        padding: .6rem;
    }
    .c1{
        padding: 0 0.6rem 0.6rem 0;
    }
    .c1 img{
        width: 100%;
    }
    .div1{
        font-size: .55rem;
        color: #666;
        padding: 0.2rem 0;
    }
    .div1 span{
        margin-left: 0.2rem;
    }
</style>
