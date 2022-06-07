<template>
    <div v-if='data' class='mt-4'>
        <center>
            <button v-if='!start' @click="letStart" type="button" class="btn btn-info btn-lg mt-5">Начать тест</button>
            <div class='wrapper-block' v-if='!answerKey'>
               <div v-if='start'>
            <h5 class='text__main' v-html='step+ 1+ ". "+ data.q'></h5>
            <div class='mt-3'></div>
            <div v-for="(answer ,name) in data.a" :key="name">
                   <div @click='nextStep($event)' :data-param='makeid(8)+ name' class='text__small'> {{ answer }}</div>
        </div>
      </div>
        <!-- <button @click='nextStep()'> next click</button>
        <button @click='lastStep()'> last click</button> -->
    </div>
     <div v-if='answerKey'>
          <Answer :answer="answerKey"/> 
     </div>
    </center>
    </div>
</template>
<script>
import test from '~/assets/files/test';
// import Answer from './Answer.vue';
export default {
    name:'Test',
    data(){
        return{
            data: null,
            step: 0,
            obj: {},
            answerKey: false,
            start: false
        }
    },
    mounted(){
      this.changeStep();
    },
    methods:{
        nextStep(event){
           let letter=  event.target.dataset.param.slice(-1);
            this.step++;
            if(this.obj[letter]){
                this.obj[letter]++
            }
            else{
                this.obj[letter] = 1;
            }
            
              this.changeStep();
              
        },
        lastStep(){
            this.step--;
            this.changeStep();
        },
        changeStep(){
            if(test.length <= this.step){
                this.step--;
               this.findMax()
               return 0;
            }
            if(this.step < 0){
               this.step++;
               return 0;
            }
              this.data = test[this.step];
        },
        findMax(){
            this.answerKey = Object.keys(this.obj).reduce((a,b)=>{
                return this.obj[a] > this.obj[b] ? a : b;
            })
            // this.$router.push('answer/'+key);
        },
        makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
      },

      letStart(){
          this.start = true;
      }
    }
}
</script>
<style>
.wrapper-block{
    width:100%;
    max-width: 620px;
}
     .text__main{
       font-size: 20px;
     }
     .text__small{
         padding:1px;
         border-radius: 20px;
         cursor: pointer;
         margin-bottom: 4px;
       font-size: 18px;
     }
     .text__small:hover{
         background: rgb(98, 142, 228);
     }
</style>