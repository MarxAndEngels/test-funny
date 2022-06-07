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
            title: 'Зайди сюда и пройди свой самый лучший тест в мире!!!',
            link:[
                {
                    rel:'image_src',
                    href: 'https://sun9-west.userapi.com/sun9-48/s/v1/ig2/UZKGblJGUMlaNuC0P8bwS6YW3NkpovpJ7ddVPCOQ3eb8j2DDfZl3qhgku-43BRSNF2u34m-MZ5jJpP39To5S0fVo.jpg?size=600x600&quality=96&type=album'
                }
            ],
            meta:[
                  {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Зайди сюда и пройди свой самый лучший тест в мире!!!'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Зайди сюда и пройди свой самый лучший тест в мире!!!'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Зайди сюда и пройди свой самый лучший тест в мире!!!'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://sun9-west.userapi.com/sun9-48/s/v1/ig2/UZKGblJGUMlaNuC0P8bwS6YW3NkpovpJ7ddVPCOQ3eb8j2DDfZl3qhgku-43BRSNF2u34m-MZ5jJpP39To5S0fVo.jpg?size=600x600&quality=96&type=album'
        },

        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
              content: 'https://sun9-west.userapi.com/sun9-48/s/v1/ig2/UZKGblJGUMlaNuC0P8bwS6YW3NkpovpJ7ddVPCOQ3eb8j2DDfZl3qhgku-43BRSNF2u34m-MZ5jJpP39To5S0fVo.jpg?size=600x600&quality=96&type=album'
        },
        // {
        //   hid: 'og:image:alt',
        //   property: 'og:image:alt',
        //   content: this.title
        // },
        {
          property: 'vk:image',
          content: 'https://sun9-west.userapi.com/sun9-48/s/v1/ig2/UZKGblJGUMlaNuC0P8bwS6YW3NkpovpJ7ddVPCOQ3eb8j2DDfZl3qhgku-43BRSNF2u34m-MZ5jJpP39To5S0fVo.jpg?size=600x600&quality=96&type=album'
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