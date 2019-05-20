<template>
    <div>
        <div class="addS" >
            <button class="delB"  @click="delShoppingCart()" v-show="getValue>0">－</button>
            <input type="text" disabled v-model="getValue" v-show="getValue>0">
            <button class="addB" v-if="foodT.specfoods.length===1"  @click="addShoppingCart($event)" >＋</button>
            <button class="addB1" v-if="foodT.specfoods.length===2" @click="showType">选规格</button>
        </div>
        <div class="foodType" v-if="type1">
            <div class="choose">
                <div class="div1"><span class="div1sp">{{foodT.name}}</span><Icon type="md-close" class="icon1111" @click="hiddenType"/></div>
                <div class="div2">
                    <p class="p1">规格</p>
                    <div class="div21">
                        <span class="sp1" :class="{ssp:v===i}" @click="v = i" v-for="(data,i) in foodT.specfoods" :key="i">{{data.specs_name}}</span>
                    </div>
                </div>
                <div class="div3">
                    <span class="div3sp1">{{"$20"}}</span>
                    <span class="div3sp2"  @click="addShoppingCart1($event)">加入购物车</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import '../../assets/msgBus';
    export default {
        name: "RbuttonA",
        data(){
            return {
                value:0,
                v:0,
                type1:false,
            }
        },
        props:{
            foodT:{},
            shop:{},
            ball:null,
        },
        mounted(){
            this.$store.state.cartList.map((v)=>{
                if(this.foodT._id === v.f._id){
                    this.value = v.count;
                }
            });
        },
        computed:{
          getValue(){
              if(this.$store.state.cartList.length===0){
                  this.value = 0;
                  return this.value;
               }
              this.$store.state.cartList.map((v)=>{
                  if(this.foodT._id === v.f._id){
                      this.value = v.count;
                  }
              });
              return this.value;
          }
        },
        methods:{
            delShoppingCart(){
                if(this.value<=0){
                    return;
                }
                this.value--;
                this.$store.commit('mainDelShoppingCart',this.foodT.specfoods[0].price);
                let obj = {f:this.foodT, count:this.value ,shop:this.shop};
                this.$store.commit('removeProduct',obj);
            },
            showType(){
              this.type1=true;
            },
            hiddenType(){
                this.type1=false;
            },
            addShoppingCart(e){
                this.value++;
                this.$store.commit('mainAddShoppingCart',this.foodT.specfoods[0].price);
                let obj = {f:this.foodT, count:this.value,shop:this.shop};
                this.$store.commit('addProduct',obj);

                // this.ball(e.clientX-e.offsetX,e.clientY-e.offsetY);
            },
            addShoppingCart1(e){
                this.value++;
                let foodT1 = Object.assign({}, this.foodT);
                let sp1 = foodT1.specfoods.slice(this.v,1);
                foodT1.specfoods = sp1;
                this.$store.commit('mainAddShoppingCart',foodT1.specfoods.price);
                let obj = {f:foodT1, count:this.value,shop:this.shop};
                this.$store.commit('addProduct',obj);
                this.type1=false;
            },
        }
    }
</script>

<style scoped>
    .addS{
        position: absolute;
        bottom: 0;
        right: .6rem;
    }
    .addS input{
        font-size: .6rem;
        text-align: center;
        border: 0;
        background: transparent;
        width: 1rem;
    }
    button{
        /*padding-right: 0.2rem;*/
        font-size: 0.7rem;
        outline: none;
        text-align: center;
        line-height: 0.6rem;
        border: 1px solid #3190e8;
    }
    .delB{
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
        background: transparent;
        color: #3190e8;
    }
    .addB{
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
        color: white;
        background: #3190e8;
        position: relative;
    }
    .addB1{
        font-size: 0.6rem;
        background: #3190e8;
        color: white;
        padding:0.12rem 0.2rem ;
        border-radius: 0.2rem;
    }
    .foodType{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 111;
        background: rgba(255,255,255,0.5);
    }
    .choose{
        position: absolute;
        width: 70%;
        overflow: hidden;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        box-shadow: 0 0 3px rgba(0,0,0,0.1);
        border: 1px;
        border-radius: .1rem;
    }
    .div1{
        background: #f4f4f4;
        text-align: center;
        font-size: 0.75rem;
        padding: 0.25rem 0;
    }
    .div1sp{
        padding-left: 0.6rem;
    }
    .icon1111{
        float: right;
        font-size: 0.9rem;
        line-height: 1rem;
        margin-right: 0.2rem;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .div2{
        padding: 0.25rem 0 1rem;
        font-size: .65rem;
    }
    .p1{
        padding: 0.3rem 0;
        font-size: 0.6rem;
    }
    .div21{
        padding: 0.2rem 0;
    }
    .div21 span{
        border: 0.08rem solid #ccc;
        border-radius: 0.1rem;
        padding: 0.1rem 0.4rem;
    }
    .sp1{
        margin-right: 0.5rem;
    }
    .div3{
        font-size: .7rem;
        padding: 0.5rem 0.5rem 0.5rem 0.1rem;
        display: flex;
        justify-content: space-between;
        background-color: #f5f5f5;
    }
    .div3sp1{
        color: #f8cb86;
    }
    .div3sp2{
        text-indent: 0;
        text-align: center;
        display: inline-block;
        font-size: 0.6rem;
        background: #3190e8;
        color: white;
        border-radius: 0.2rem;
        padding: 0.2rem 0.3rem;
    }
    .div21 .ssp{
        color:  #3190e8;
        border: 0.075rem solid #3190e8;
    }
</style>
