<template>
    <div class="setusername_page">
        <div class="setusername">
            <zhead>
                <div slot="logo">
                    <router-link :to="{path:'/profile/infor'}">
                        <Icon type="ios-arrow-back"  color="white" size="35"/>
                    </router-link>
                </div>
                <div slot="title" class="proflie_my">修改用户名</div>
            </zhead>
        </div>
        <div class="setusername_input">
            <input type="text" placeholder="输入用户名" class="input" v-model="inputname" @input="inputClick" :class="{changeinput:changei}">
            <p v-if="earn">用户名只修改一次(5-24字符之间)</p>
            <p class="unlikep" v-else>用户名长度在5到24位之间</p>
        </div>
        <div class="setusername_button">
            <div :class="{changebutton:opacity}" @click="update">确认修改</div>
        </div>

    </div>
</template>

<script>
    import zhead from '../../../../components/header/head'

    export default {
        name: "setusername",
        data(){
            return{
                inputname:'',
                earn:true,//提示
                changep:false,
                changei:false,
                opacity:true
            }
        },

        methods:{
            inputClick(){
                if(this.inputname.length<4 || this.inputname.length>24){
                    this.changei=true;
                    this.earn=false;
                    this.opacity=true
                }else{
                    this.changei=false;
                    this.earn=true;
                    this.opacity=false

                }

            },
            update(){
                this.$store.commit('byUserInfo1',this.inputname);
                this.$router.push({path:"/profile/infor"});
            }

        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .setusername_page{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
    .proflie_my{
        font-weight: 600;
    }
    .setusername_input{
        width: 18.75rem;
        margin-top: 3rem;
    }
    .input{
        width: 14.8rem;
        height: 1.95rem;
        background: #f5f5f5;
        border: 1px solid #bfc4c5;
        margin-left: 0.5rem;
        font-size: 0.7rem;
        padding-left: 0.3rem;
        outline: none;
    }
    .setusername_input p{
        font-size: 0.6rem;
        margin-left: 0.5rem;
        color: #666;
        margin-top: 0.5rem;
    }
    .setusername_input .unlikep{
        font-size: 0.6rem;
        margin-left: 0.5rem;
        color: red;
        margin-top: 0.5rem;
    }
    .setusername_button div{
        outline: none;
        width: 14.8rem;
        height:2rem;
        background:dodgerblue ;
        color: white;
        margin-left: 0.5rem;
        margin-top: 1.5rem;
        text-align: center;
        line-height: 2rem;
        font-size: 0.7rem;
        display: block;
    }
    .changeinput{
        border: 1px solid red;
    }
    .changebutton{
        opacity: 0.6;
    }
</style>
