<template>
    <div v-if='data' class='mt-4'>
        <center>
            <button v-if='!start' @click="letStart" type="button" class="btn btn-dark btn-lg mt-5">Начать тест</button>
            <div :class="{'wrapper-block': true, 'active': animQW}" v-if='!answerKey'>
               <div v-if='start'>
            <h5 class='text__main' v-html='step+ 1+ ". "+ data.q'></h5>
            <div class='mt-3'></div>
            <div class='wrapper__text-answer'>
            <div v-for="(answer ,name) in data.a" :key="name" >
        
            <div class="checkbox" style='width:100%' :key="answer+Math.random(42342341)">
      <label :key="answer+name+Math.random(423423422)" @click='nextStep($event)' style='width:100%'>
        <input :key="name+Math.random(234234234)" type="checkbox"><span class="checkbox-material"><span class="check"></span></span>
                <span :data-param='makeid(8)+ name' class='text__small'> {{ answer }}</span>
      </label>
    </div>

           <!-- <div @click='nextStep($event)' :data-param='makeid(8)+ name' class='text__small'> {{ answer }}</div> -->
                
        </div>
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
            start: false,
            animQW: false
        }
    },
    mounted(){
      this.changeStep();
    },
    methods:{
        nextStep(event){
            let wrapper__text_answer = document.querySelector('.wrapper__text-answer');
            wrapper__text_answer.style.pointerEvents='none'; 

            setTimeout(()=>{
                let text = event.target.nextElementSibling.nextElementSibling;

          let letter=  text.dataset.param.slice(-1);

            //  let checkbox = event.target;
                //    сheckbox.style.animationName = 'none';
        //    checkbox.checked = false;
           
            this.step++;
            if(this.obj[letter]){
                this.obj[letter]++
            }
            else{
                this.obj[letter] = 1;
            }
            
              this.changeStep();

              wrapper__text_answer.style.pointerEvents='auto'; 

            },800)
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
<style lang='scss'>
.wrapper-block{
    width:100%;
    max-width: 420px;
}
.wrapper-block.active{
    animation: opacity 1s ease;
}
     .text__main{
       font-size: 20px;
     }
     .text__small{
         display: inline-block;
         padding-left: 10px;
         transform: translate3d(0px,2px,0);
        //  padding:1px;
         border-radius: 20px;
         cursor: pointer;
         margin-bottom: 4px;
       font-size: 18px;
     }
     .text__small:hover{
         /* background: rgb(98, 142, 228); */
     }
     .wrapper__text-answer{
         padding-left: 20px;
                  text-align: justify !important;
     }


 @keyframes opacity {
      from{
          opacity: 0.97;
      }
      to{
          opacity: 1;
      }
 }


// Checkbox variables
$checkbox-size: 20px;
$checkbox-animation-ripple: 600ms;
$checkbox-animation-check: 0.3s;
$lightbg-text: rgba(0, 0, 0, 0.84);
$checked-colour: #2FAEF8;

.checkbox {
  display: inline-block;
  padding: 10px 20px;
  transform: translateZ(0); // Force 3d rendering
  label {
    cursor: pointer;
    padding-left: 0; // Reset for Bootstrap rule
  }

  // Hide native checkbox
  input[type=checkbox] {
    opacity: 0;
    position: absolute;
    margin: 0;
    z-index: -1;
    width: 0;
    height: 0;
    overflow: hidden;
    left: 0;
    pointer-events: none;
  }

  .checkbox-material {
    vertical-align: middle;
    position: relative;
    top: 3px;
    &:before {
      position: absolute;
      left: 8px;
      top: 2px;
      content: "";
      background-color: $lightbg-text;
      height: 4px;
      width: 4px;
      border-radius: 100%;
      z-index: 1;
      opacity: 0;
      margin: 0;
      //transform: scale3d(2.3, 2.3, 1);
    }

    .check {
      position: relative;
      display: inline-block;
      width: $checkbox-size;
      height: $checkbox-size;
      border: 2px solid;
      border-radius: 2px;
      overflow: hidden;
      z-index: 1;
    }
    .check:before {
      position: absolute;
      content: "";
      transform: rotate(45deg);
      display: block;
      margin-top: -4px;
      margin-left: 6px;
      width: 0;
      height: 0;
      box-shadow:
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0,
        0 0 0 0 inset;
    //   animation: checkbox-off $checkbox-animation-check ease-out;
    }
  }

  input[type=checkbox]:focus + .checkbox-material .check:after {
    opacity: 0.2;
  }
  input[type=checkbox]:checked + .checkbox-material .check:before {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
    animation: checkbox-on $checkbox-animation-check ease-out;
  }
  
  input[type=checkbox]:not(:checked) + .checkbox-material:before {
    // animation: rippleOff 0.5s ease-out;
  }
  input[type=checkbox]:checked + .checkbox-material:before {
    animation: rippleOn $checkbox-animation-ripple  ease-out;
  }

  // Ripple effect on click
  input[type=checkbox]:not(:checked) + .checkbox-material .check:after {
    animation: rippleOff $checkbox-animation-ripple ease-out;
  }
  input[type=checkbox]:checked + .checkbox-material .check:after {
    animation: rippleOn $checkbox-animation-ripple ease-out;
  }

  // Style for disabled inputs
  input[type=checkbox][disabled]:not(:checked) ~ .checkbox-material .check:before,
  input[type=checkbox][disabled] + .circle {
    opacity: 0.5;
  }
  input[type=checkbox][disabled] + .checkbox-material .check:after {
    background-color: $lightbg-text;
    transform: rotate(-45deg);
  }

}

// Coloured alternate styles
.coloured {
  .checkbox-material {
    .check {
      color: $checked-colour;
    }
    &:before{
      background-color: $checked-colour;
    }
  }
  input[type=checkbox]:checked + .checkbox-material {
    .check {
      color: $checked-colour;
    }
  }
  input[type=checkbox]:not(:checked) + .checkbox-material {
    
  }
}

// Animations
@keyframes checkbox-on {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px;
  }
  50% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px 2px 0 11px;
  }
  100% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px;
  }
}
@keyframes checkbox-off {
  0% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }

  25% {
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      20px -12px 0 11px,
      0 0 0 0 inset;
  }
  50% {
    transform: rotate(45deg);
    margin-top: -4px;
    margin-left: 6px;
    width: 0px;
    height: 0px;
    box-shadow:
      0 0 0 10px,
      10px -10px 0 10px,
      32px 0px 0 20px,
      0px 32px 0 20px,
      -5px 5px 0 10px,
      15px 2px 0 11px,
      0 0 0 0 inset;
  }
  51% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 10px inset;
  }
  100% {
    transform: rotate(0deg);
    margin-top: -2px;
    margin-left: -2px;
    width: 20px;
    height: 20px;
    box-shadow:
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0 0 0 0,
      0px 0px 0 0px inset;
  }
}
@keyframes rippleOn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
@keyframes rippleOff {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(13,13);
  }
}
     
</style>