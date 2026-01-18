<template lang="">
   <Layout>
         <introduction/>
         <stack/>
         <experience/>
         <project/>
         <p class="text-center dark:text-secondary-dark text-gray-600 italic text-xl md:text-3xl">"Coffee first, then the code."</p>
         <Contact/>
   </Layout>
</template>
<script setup>
import Layout from './Components/Layout.vue';
import introduction from './Pages/introduction.vue';
import stack from './Pages/stack.vue';
import experience from './Pages/experience.vue';
import project from './Pages/project.vue';
import Contact from './Pages/contact.vue';
</script>
<style lang="">
  
</style>