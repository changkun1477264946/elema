<template>
    <div class="add_page">
        <div class="add_container">
            <zhead>
                <div slot="logo">
                    <router-link :to="{path:'/profile/infor/zaddress'}">
                        <Icon type="ios-arrow-back"  color="white" size="35"/>
                    </router-link>
                </div>
                <div slot="title" >新增地址</div>

            </zhead>
            <div class="add_content">
                <div class="add_input">
                    <input type="text" placeholder="请填写你的名字" @input="keyname" v-model="inputname" :class="{input1:bk}">
                    <p v-if="showp1" >请填写你的名字</p>
                    <router-link :to="{path:'/profile/infor/zaddress/add/addDetail'}">
                        <input class="cityinput" type="text" placeholder="小区/写字楼/学校等"  v-model="city">
                    </router-link>
                    <input type="text" placeholder="请填写详细送餐地址" v-model="inputaddress" :class="{input1:bk1}" @input="keyaddress">
                    <p v-if="showp2">请详细填写送餐地址</p>
                    <p v-if="showp2_2">送餐地址太短了,不能辨别</p>
                    <input type="text" placeholder="请填写能够联系到您的手机号" v-model="inputtel" :class="{input1:bk2}" @input="keytel">
                    <p v-if="showp3">手机号不能为空</p>
                    <p v-if="showp3_3">请输入正确的手机号</p>
                    <input type="text" placeholder="备用联系电话(选填)" v-model="inputtelone"  @input="keytelone">
                    <p v-if="showp4">请输入正确的手机号</p>
                </div>
                <div class="newaddress" :class="{newaddress1:newadd}">
                    <div @click="newaddress">新增地址</div>
                </div>
            </div>
            <!--@click="$parent.showaddress1"-->
        </div>
        <div>
            <transition name="router-slid" model="out-in">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
    import zhead from '../../../../../components/header/head'
    import Vue from 'vue';
    export default {
        name: "add",
        data(){
            return{
                showp1:false,
                showp2:false,
                showp2_2:false,
                showp3:false,
                showp3_3:false,
                showp4:false,
                // showadd:true,
                city:null,
                inputname:null,
                bk:false,
                bk1:false,
                bk2:false,
                inputaddress:'',
                inputtel:'',
                inputtelone:'',
                newadd:true,
                address:{},

                item:''//守卫
            }
        },
        // created(){
        //     this.city=this.$route.query.cityname
        //     // this.getAddress();
        //     // console.log(this.$store.state.userInfo.user_id);
        // },
        beforeRouteUpdate(to,from,next){
            // Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses').then((response)=>{
            //     this.address=response.data;
            //     console.log(this.address);
            //
            // });
            if (JSON.parse(localStorage.getItem("data"))) {
                this.item = JSON.parse(localStorage.getItem("data"));
                this.city = this.item.name;
            }

            next();

        },
        // beforeRouteUpdate(to,from,next){
        //     this.city=this.$route.query.cityname;
        //     next();
        // },
        methods:{
            // add(){
            //     this.showadd=false
            // },
            // add1(){
            //     this.showadd=true
            //     this.$router.push({path:'/profile/infor/zaddress/add'})
            // },
            // add2(){
            //     this.showadd=true
            //     this.city=this.$store.state.guessCity.name
            // },
            // getAddress(){
            //     Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses').then((response)=>{
            //
            //
            //     });
            // },
            keyname(){
                if(!this.inputname){
                    this.showp1=true;
                    this.bk=true
                }else{
                    this.showp1=false;
                    this.bk=false
                }
                this.btn();
            },
            keyaddress(){
                if(this.inputaddress.length===0){
                    this.showp2=true;
                    this.bk1=true;
                    this.showp2_2=false;
                }else if(this.inputaddress.length>0 && this.inputaddress.length <= 2){
                    this.showp2_2=true;
                    this.showp2=false;
                    this.bk1=true;
                }else{
                    this.showp2_2=false;
                    this.showp2=false;
                    this.bk1=false;
                }
                this.btn();
                // console.log(this.inputaddress.length);
            },
            keytel(){
                if(this.inputtel === '' || !this.inputtel){
                    this.showp3=true;
                    this.showp3_3=false;
                    this.bk2=true;
                }else if(!(/^1[34578]\d{9}$/.test(this.inputtel))){
                    this.showp3_3=true;
                    this.showp3=false;
                    this.bk2=true;
                }else{
                    this.showp3_3=false;
                    this.showp3=false;
                    this.bk2=false;
                }
                this.btn();
            },
            keytelone(){
                if(this.inputtelone===''){
                    this.showp4=false
                }else if(!(/^1[34578]\d{9}$/.test(this.inputtelone))){
                    this.showp4=true;
                }else{
                    this.showp4=false;
                }
                this.btn();
            },
            btn(){
                if(this.inputname && this.city && this.inputaddress && this.inputtel){
                    this.newadd=false
                }else{
                    this.newadd=true
                }
            },
            newaddress(){
                Vue.axios.post('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses',{
                    'address':this.city,
                    'address_detail':this.inputaddress,
                    'geohash':this.$store.state.geohash,
                    'name':this.inputname,
                    'phone':this.inputtel,
                    'tag':'1',
                    'phone_bk':this.inputtelone,
                    'sex':1,
                    'poi_type':0,
                    'tag_type':2
                }).then((response)=>{
                    if (response.data.success === "添加地址成功") {
                        this.$router.push({path:'/profile/infor/zaddress'});
                    }
                });
                // this.$store.commit('byAddAddress',this.address);
                // console.log(this.$store.state.addAddress);
                // localStorage.setItem('data', JSON.stringify(this.address));
                // console.log(JSON.parse(localStorage.getItem("data")))
                // this.$store.commit('byAddAddress',this.userName);



                // this.$router.push({path:'/profile/infor/zaddress'});
            },

        },




        // beforeRouteUpdate(to, from, next) {
        //     this.getAddress();
        //     next()
        // },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    input{
        outline: none;
    }
    a{
        text-decoration: none;
    }
    .add_page{
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
    .add_content{
        margin-top: 3rem;

    }
    .add_input{
        width: 100%;
        background: white;
        padding: 0.5rem;
    }
    .add_input input{
        width: 15rem;
        height: 1.75rem;
        background: #f2f2f2;
        border: 0.05rem solid #ddd;
        border-radius: 0.15rem;
        font-size: 0.6rem;
        padding: 0.5rem;
        margin-top: 0.3rem;
    }
    .add_input a{
        color: black;
    }
    .add_input p{
        font-size: 0.5rem;
        margin-top: 0.25rem;
        color: red;
    }
    .newaddress{
        display: block;
        background:#4cd964 ;
        width: 15rem;
        height: 1.85rem;
        border-radius: 0.15rem;
        text-align: center;
        font-size: 0.6rem;
        line-height: 2rem;
        color: white;
        margin: 1rem 0.5rem;
    }
    .add_input .input1{
        border: 0.05rem solid red;
    }
    .newaddress span{
        opacity: 0.7;
    }
    .newaddress1{
        opacity: 0.6;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
