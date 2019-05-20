<template>
    <div class="address_page" >
        <div class="address_container" >
            <zhead>
                <div slot="logo">
                    <router-link :to="{path:'/profile/infor'}">
                        <Icon type="ios-arrow-back"  color="white" size="35"/>
                    </router-link>
                </div>
                <div slot="title" >编辑地址</div>
                <div slot="login" @click="editclick">{{edit}}</div>
            </zhead>
            <div class="address_content">
                <div class="address_des" :class="{bgc:bgccolor}" v-for="(data,index) in alladdress" v-if="showadd">
                    <div class="address_desone">
                        <p>{{data.address}}</p>
                        <p>{{data.phone}}</p><span v-if="data.phone_bk">{{data.phone_bk}}</span>

                    </div>
                    <div class="address_icon" v-if="icon" @click="deleteclick(index,data)">
                        <Icon type="md-close" size="20"/>
                    </div>

                </div>

                <router-link :to="{path:'/profile/infor/zaddress/add'}">
                    <div class="address_new" >
                        <p>新增地址</p>
                        <Icon type="ios-arrow-forward" size="25" color=" #bfc4c5"/>
                    </div>
                </router-link>


            </div>
        </div>
        <div>
            <transition name="router-slid" model="out-in">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
    import zhead from '../../../../components/header/head'
    import Vue from 'vue';
    export default {
        name: "zaddress",
        data(){
            return {
                bgccolor:false,
                // showaddress:true,
                alladdress:[],
                icon:false,
                edit:'编辑',
                removeaddress:{},
                showadd:true
            }
        },
        beforeRouteUpdate (to, from, next) {
            // if (JSON.parse(localStorage.getItem("data"))) {
            //     this.item = JSON.parse(localStorage.getItem("data"));
            //     this.address = this.item.name + "*" + this.item.address;
            // }
            this.getAddress();
            // this.bgccolor=true;
            next();
        },

        methods:{
            // showadd(){
            //     this.showaddress=false
            // },
            // showaddress1(){
            //     this.showaddress=true
            //     // this.$router.push({path:"/profile/infor"})
            //     this.$router.push({path:'/profile/infor/zaddress'})
            // },
            // showaddress2(){
            //     this.showaddress=true
            //     this.$router.push({path:'/profile/infor/zaddress'})
            //     this.alladdress=this.$store.state.addAddress
            // },
            getAddress(){
                Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses').then((response)=>{
                    this.alladdress=response.data.reverse();
                });

            },
            editclick(){
                if(this.edit==='编辑'){
                    this.edit='完成';
                    this.icon=true
                }else{
                    this.icon=false
                    this.edit='编辑'
                }

            },
            deleteclick(index,data){
                console.log(index);
                console.log(data.id);
                Vue.axios.delete('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses/'+data.id).then((response)=>{
                    this.removeaddress=response.data;
                });
                this.alladdress.splice(index,1);
            }
        },
        mounted(){
            this.getAddress();
        },
        // beforeUpdate(){
        //       this.showadd=true;
        //       this.bgccolor=true;
        //     this.getAddress();
        //     // this.alladdress=this.$route.query.city;
        //  },
        //  updated(){
        //      this.showadd=true;
        //      this.bgccolor=true;
        //      this.getAddress();
        //  },
        // beforeRouteUpdate (to, from, next) {
        //   this.getAddress();
        //     next();
        // },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    a{text-decoration: none}
    .address_page{
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
    .address_content{
        margin-top: 3rem;
    }
    .address_des{
        width: 16rem;
        height: 3.05rem;
        /*background: #fff8c3;*/
        background: white;
        font-size: 0.6rem;
        padding: 0.5rem;
        border-top: 0.05rem solid lightgray;
        border-bottom: 0.05rem solid lightgray;
        display: flex;
        justify-content: space-between;
    }
    .address_des p:nth-child(2){
        margin-top: -0.5rem;
    }
    .address_content a{
        color: black;
    }
    .address_new{
        width: 16rem;
        height: 2.15rem;
        background: white;
        margin-top: 0.75rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        border-top: 0.05rem solid #d9d9d9;
        border-bottom: 0.05rem solid #d9d9d9;
    }
    .bgc{
        background:#fff8c3;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
