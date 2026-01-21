<template lang="">
     <Navbar/>
     <main class="pt-0 px-5 mt-[-50px] md:mt-0">
          <slot/>
     </main>
     <Footer/>
</template>
<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from './Footer.vue';
</script>
<style lang="">
     
</style>