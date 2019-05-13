<template>
    <div class="score">
        <Row>
            <Col span="9" class="ccontain">
                <p class="p1">{{value}}</p>
                <p class="p2">综合评价</p>
                <p class="p3">高于周边商家 &nbsp;{{'76.9%'}}</p>
            </Col>
            <Col span="15" class="ccontain">
                <p class="p4">服务态度 <span>
                    <Rate show-text disabled v-model="value1" class="r">
                        <span style="color: #f5a623">{{ value1}}</span>
                    </Rate>
                </span></p>
                <p class="p4">菜品评价 <span>
                    <Rate show-text disabled v-model="value2" class="r">
                        <span style="color: #f5a623">{{value2}}</span>
                    </Rate>
                </span>
                </p>
                <p class="p4">送达时间 <span class="SDtime">{{'1'}}分钟</span></p>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: "score",
        data () {
            return {
                value:0,
                value1:0,
                value2: 0
            }
        },
        props:{
          scoreId:{
              type:String,
              default:"无"
          }
        },
        mounted(){
            console.log(this.scoreId,'nissss');
            Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.scoreId+'/ratings/scores').then((res)=>{
                this.value= Math.round(res.data.overall_score*10)/10;
                this.value1= Math.round(res.data.service_score*10)/10;
                this.value2= Math.round(res.data.food_score*10)/10;
                console.log(res.data,111)
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        }
    }
</script>

<style scoped>
    .score{
        background-color: #fff;
        padding: .8rem .5rem;
        margin-bottom: .5rem;
        text-align: center;
    }
    .ccontain{
        height: 4rem;
    }
    p{
        margin: 0;
    }
    .SDtime{
        margin-left: 0.5rem;
        color: #888;
        font-size: 0.4rem;
    }
    .r{
        font-size: 0.5rem;
        transform: scale(0.8);
    }
    .p1{
        font-size: 1.2rem;
        color: #f60;
    }
    .p2{
        font-size: .65rem;
        color: #666;
        margin-bottom: .1rem;
    }
    .p3{
        margin-top: 0.3rem;
        font-size: .4rem;
        color: #999;
    }
    .p4{

        text-align: left;
        color: #666;
        font-size: .65rem;
        line-height: 1.2rem;
    }

</style>
