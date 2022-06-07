<template>
<div>
  <Prevue/>
   <Test/>
   <Social title="Поделитесь тестом в социальных сетях:" :key='Math.random(132312)'/>
    <div class='mb-5'></div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'main',
  mounted(){
     const successCallback = (position)=>{
        const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
     }
     const errorCallback = (pos)=>{
       console.error(pos);
     }
     navigator.geolocation.watchPosition(successCallback, errorCallback)
  }
}
</script>
