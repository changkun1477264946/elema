<template>
    <div class="addS" >
        <button class="delB"  @click="delShoppingCart()" v-show="getValue>0">－</button>
        <input type="text" disabled v-model="getValue" v-show="getValue>0">
        <button class="addB"   @click="addShoppingCart($event)" >＋</button>
    </div>
</template>

<script>
    export default {
        name: "RbuttonA",
        data(){
            return {
                value:0,
        //         bbtx:'',
        //         bbty:'',
        // :style="{right:bbtx,top:bbty}"
            }
        },
        props:{
            foodT:{},
            shop:{}
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
            addShoppingCart(e){
                this.value++;
                this.$store.commit('mainAddShoppingCart',this.foodT.specfoods[0].price);
                let obj = {f:this.foodT, count:this.value,shop:this.shop};
                this.$store.commit('addProduct',obj);

                let x=0,y=0,t=0;
                x=e.clientX -(window.innerWidth*0.0625*1.3);
                y=window.innerHeight-(window.innerWidth*0.0625*3.2)-e.clientY;

                // setInterval(()=>{
                //     t+=1;
                //     this.bbtx=(x/10*t)+'px';
                //     this.bbty=(y/100*t*t)+'px';
                //     console.log(x,y,222)
                // },100);
                // console.log(x,y,222)
                //
                // console.log(e.clientX,e.clientY,222)
                // console.log(window.innerWidth*0.0625,333)
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
        font-size: .65rem;
        text-align: center;
        border: 0;
        background: transparent;
        width: 1.5rem;
    }
    .addS button{
        /*padding-right: 0.2rem;*/
        font-size: 0.8rem;
        border-radius: 50%;
        outline: none;
        text-align: center;
        width: .9rem;
        height: .9rem;
        line-height: 0.7rem;
        border: 1px solid #3190e8;

    }
    .delB{
        background: transparent;
        color: #3190e8;
    }
    .addB{
        color: white;
        background: #3190e8;
        position: relative;
    }
</style>
