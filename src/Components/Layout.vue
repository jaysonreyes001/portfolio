<template lang="">
     <Navbar/>
     <main class="pt-0 px-5 mt-[-50px] md:mt-0">
          <router-view/>
     </main>
     <Footer/>
     <a v-if="scrollY > 500" href="javascript:void(0)" @click="scrollToTop" 
          class="p-2 shadow-lg dark:shadow-primary-dark/50 shadow-primary/50 transition dark:hover:bg-primary-dark/50 hover:bg-primary-light/50 fixed right-[20px] bottom-[20px] dark:bg-primary-dark bg-primary-light text-white rounded">
          <v-icon class="text-4xl" icon="material-symbols:keyboard-arrow-up"/>
     </a>
</template>
<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from './Footer.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const scrollY = ref(0);
const handleScroll = (event) => {
     console.log(window.scrollY)
     scrollY.value = window.scrollY;
};

const route = useRoute();
const currentRoute = ref("home");
currentRoute.value = route.meta.name;

const scrollToTop = () => {
     window.scrollTo({
          top: 0,
          behavior: 'smooth'
     })
}
onMounted(()=>{
     window.addEventListener('scroll',handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="">
     
</style>