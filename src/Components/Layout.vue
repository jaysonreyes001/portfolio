<template lang="">
     <Navbar/>
     <main class="pt-32 mt-[-50px] md:mt-0">
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