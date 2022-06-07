<template lang="">

    <div v-if='url'>

        <!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Посмотреть ваш результат тестирования
</button>
<button class="btn btn-primary" @click='goHome'> Вернуться на главную</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Поздравляем!!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class='answer__text mb-4' v-html='result.name'></div>
        
            <div v-if="answer == 'q'">
  <img src="~/static/img/leftsp.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer =='w'">
  <img src="~/static/img/rightsp.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer == 'e'">
  <img src="~/static/img/leftzad.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer == 'r'">
  <img src="~/static/img/rightzad.png" alt="" class='mainImgAnswer'>
            </div>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Спасибо, я согласен!</button>
      </div>
    </div>
  </div>
</div>
             <!-- <h5>{{ result.name }}</h5>
        
            <div v-if="answer == 'q'">
  <img src="~/static/img/leftsp.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer =='w'">
  <img src="~/static/img/rightsp.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer == 'e'">
  <img src="~/static/img/leftzad.png" alt="" class='mainImgAnswer'>
            </div>
            <div v-if="answer == 'r'">
  <img src="~/static/img/rightzad.png" alt="" class='mainImgAnswer'>
            </div> -->
         
     
    </div>
</template>
<script>
import test from '~/assets/files/answers';
export default {
      props:{
        answer: String
    },
    data(){
        return{
            result: null,
            url: null
        }
    },
    beforeMount(){
        this.result = test[this.answer];
        console.log(this.result)
        this.url = '../static/img/'+this.result.image;
    },
    mounted(){
      this.confitiAnswer();
      
      setTimeout(()=>{
        const elemModal = document.querySelector('#exampleModal');
// активируем элемент в качестве модального окна с параметрами по умолчанию
const modal = new bootstrap.Modal( elemModal);
 modal.show();
      }, 800)

    },
    methods: {
      goHome(){
          window.location.reload()
      },
      confitiAnswer(){
            var end = Date.now() + (12 * 80);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
      }
    },
}
</script>
<style>
    .mainImgAnswer{
         width: 100%;
         max-width: 360px;
    }
    .answer__text{
      font-size: 18px;
    }

</style>