<template>
    <div class="container1">
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">增加地址</div>
        </zhead>
        <div class="body">
            <!--联系人-->
            <Row>
                <Col span="7">
                    <div class="linkman">联系人</div>
                </Col>
                <Col span="17">
                    <input type="text" class="name" v-model="name1" placeholder="你的名字">
                    <div class="sex">
                        <span @click="changeIcon=1">
                            <Icon type="md-checkmark-circle" class="sexIcon" :color="changeIcon===1 ? '#4cd964':'#ccc'"/>
                            先生
                        </span>
                        <span @click="changeIcon=2">
                            <Icon type="md-checkmark-circle" class="sexIcon" :color="changeIcon===2? '#4cd964':'#ccc'"/>
                            女士
                        </span>
                    </div>
                </Col>
            </Row>
            <Row class="bord_top">
                <Col span="7">
                    <div class="linkman">联系电话</div>
                </Col>
                <Col span="17">
                    <div class="iphone">
                        <input type="text" class="name" v-model="iphone" placeholder="你的手机号">
                        <Icon type="md-add" class="phone_icon" @click="showIphone = true" />
                    </div>
                    <div class="iphone bord_top" v-if="showIphone">
                        <input type="text" class="name" v-model="iphone1" placeholder="备选电话">
                    </div>
                </Col>
            </Row>
            <Row  class="bord_top">
                <Col span="7">
                    <div class="linkman">送餐地址</div>
                </Col>
                <Col span="17">
                    <div class="iphone" @click="goSearchAddressDetailed">
                        <input type="text" class="name" v-model="address" placeholder="小区/写字楼/学校等" disabled></div>
                    <div class="iphone bord_top">
                        <input type="text" class="name" v-model="address_detail" placeholder="详细地址(如门牌号等)">
                    </div>
                </Col>
            </Row>
            <Row class="bord_top">
                <Col span="7">
                    <div class="linkman">标签</div>
                </Col>
                <Col span="17">
                    <div class="iphone">
                        <input type="text" class="name"  v-model="tag" placeholder="无/家/学校/公司">
                    </div>
                </Col>
            </Row>

        </div>
        <button class="submitBtn" @click="submitInfo">确定</button>
        <div v-if="warn_show" >
            <warn-frame>
                <div slot="content">{{warn_v}}</div>
                <div slot="ensure" @click="warn_hidden">确认</div>
            </warn-frame>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    import WarnFrame from "../../components/common/warnFrame";
    export default {
        name: "addAddressPage",
        components: {WarnFrame, Zhead},
        data(){
            return {
                showIphone:false,
                address:this.$route.query.address.name,
                tag_type:2,

                name1:this.$store.state.name1,
                changeIcon:this.$store.state.changeIcon,
                iphone:this.$store.state.iphone,
                iphone1:this.$store.state.iphone1,
                address_detail:this.$store.state.address_detail,
                tag:this.$store.state.tag,

                warn_v:'',
                warn_show:false,
            }
        },
        methods:{
            submitInfo(){
                if(!this.name1){
                    this.warn_v = '请输入姓名';
                    this.warn_show = true;
                    return;
                }else if(!this.iphone){
                    this.warn_v = '请输入电话号码';
                    this.warn_show = true;
                    return;
                }else if(!this.address){
                    this.warn_v = '请选择地址';
                    this.warn_show = true;
                    return;
                }else if(!this.address_detail){
                    this.warn_v = '详细地址信息错误';
                    this.warn_show = true;
                    return;
                }else if(!this.tag){
                    this.warn_v = '标签错误';
                    this.warn_show = true;
                    return;
                }
                    // 增加收货地址
                    Vue.axios.post('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.id+'/addresses',{
                            user_id:this.$store.state.guessCity.id,
                            address:this.address,
                            address_detail:this.address_detail,
                            geohash:this.$route.query.address.geohash,
                            name:this.name1,
                            phone:this.iphone,
                            tag:this.tag,
                            sex:this.changeIcon,
                            poi_type:0,
                            phone_bk:this.iphone1,
                            tag_type:this.tag_type,
                    }).then((res)=>{
                       console.log(res.data)
                    }).catch((error)=>{
                        console.log('请求错误:' ,error);
                    });

                this.$store.commit('deleteAddressData1');
                this.$router.push({path:'/order/searchAddressPage'})
            },
            goSearchAddressDetailed(){
                this.$store.commit('changeAddressData',[this.name1,this.changeIcon,this.iphone,this.iphone1,this.address_detail,this.tag]);
                this.$router.push({path:'/searchAddressDetailed'})
            },
            warn_hidden(){
                this.warn_show = false;
            }
        }
    }
</script>

<style scoped>
    .container1{
        padding-top: 2.3rem;
    }
    input{
        list-style: none;
        background-color: transparent;
    }

    .logo{
        text-align: left;
        font-size: 1.5rem;
        line-height: 2rem;
        padding-left: 0.2rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    .body{
        background-color: #fff;
        padding: 0 .7rem;
    }
    .linkman{
        font-size: .7rem;
        color: #333;;
        line-height: 2.5rem;
        /*text-align: center;*/
    }
    .name{
        width: 100%;
        height: 2.5rem;
        font-size: .7rem;
        color: #999;
    }
    .bord_top{
        border-top: .025rem solid #f5f5f5;
    }
    .sex{
        display: flex;
        line-height: 2.5rem;
        font-size: .7rem;
        border-top: .025rem solid #f5f5f5;
    }
    .sex span{
        font-size: .7rem;
        color: #333;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        margin-right: .8rem;
    }
    .sexIcon{
        font-size: 1rem;
        margin-right: 0.3rem;
    }
    .iphone{
        position: relative;
        padding-right: 15%;
    }
    .phone_icon{
        position: absolute;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);
        font-size: 1.4rem;
        color: #3190e8;
    }
    .submitBtn{
        display: block;
        width: 90%;
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0.5rem auto;
        line-height: 1.8rem;
        border-radius: .2rem;
    }
</style>
