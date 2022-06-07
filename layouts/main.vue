<template>
<div>
    <div class='container'>
       <Nuxt />
    </div>
</div>
</template>
<script>
export default {

   head(){
        return{
            title: 'ЗАЙДИ И ПРОЙДИ СВОЙ САМЫЙ ЛУЧШИЙ ТЕСТ В МИРЕ!!',
            link:[
                {
                    rel:'image_src',
                    href: 'https://amigo-pets.ru/wp-content/uploads/2020/05/SHelti10.jpg'
                }
            ],
            meta:[
                  {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'adssdasdsad'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '3123123'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '3123123'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://palpalych.ru/storage/app/media/2019/sajt-hudozhnika_soc.jpg'
        },
        // {
        //   hid: 'og:image:secure_url',
        //   property: 'og:image:secure_url',
        //       content: 'https://amigo-pets.ru/wp-content/uploads/2020/05/SHelti10.jpg'
        // },
        // {
        //   hid: 'og:image:alt',
        //   property: 'og:image:alt',
        //   content: this.title
        // },
        {
          property: 'vk:image',
          content: 'https://amigo-pets.ru/wp-content/uploads/2020/05/SHelti10.jpg'
        }
            ],
            script:[
                {
                    src: 'https://yastatic.net/share2/share.js'
                },
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
                },
                {
                    src: 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
                },
                
            ]
        }
    },
}
</script>
<style>
    
</style>