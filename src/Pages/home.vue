<template lang="">
     <div>
          <introduction/>
          <stack/>
          <experience/>
          <project/>
          <p class="text-center dark:text-secondary-dark text-gray-600 italic text-xl md:text-3xl">"Code then Coffee"</p>
          <Contact/>
     </div>
</template>
<script setup>
import introduction from '@/Pages/Home/introduction.vue';
import stack from '@/Pages/Home/stack.vue';
import experience from '@/Pages/Home/experience.vue';
import project from '@/Pages/Home/project.vue';
import Contact from '@/Pages/Home/contact.vue';
import Layout from '@/Components/Layout.vue';
</script>
<style lang="">
     
</style>