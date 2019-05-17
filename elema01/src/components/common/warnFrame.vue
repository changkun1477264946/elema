<template>
    <div class="container1 animated bounceIn">
        <div class="body1">
            <Icon type="ios-alert-outline" class="div1" />
            <div class="div2">
                <slot name="content"></slot>
            </div>
            <div class="btn1">
                <slot name="ensure"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "warnFrame"
    }
</script>

<style scoped>
    .container1{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:500;
        background-color: transparent;
    }
    .body1{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 12rem;
        animation: tipMove .4s;
        background-color: #fff;
        padding-top: .6rem;
        box-shadow: 0 0 2px rgba(0,0,0,0.2);
        border: 1px;
        border-radius: .25rem;
    }
    .div1{
        font-size: 3.5rem;
        color:  #f8cb86;
    }
    .div2{
        font-size: .7rem;
        color: #333;
        line-height: 1.2rem;
        text-align: center;
        margin-top: .5rem;
        padding: 0 .5rem;
    }
    .btn1{
        font-size: .8rem;
        color: #fff;
        font-weight: 700;
        margin-top: .7rem;
        background-color: #4cd964;
        width: 100%;
        text-align: center;
        line-height: 1.8rem;
        border: 1px;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
    }
</style>
