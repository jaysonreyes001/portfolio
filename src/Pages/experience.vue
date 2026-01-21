<template lang="">
     <section id="experience" class="my-24 app-size">
          <h1 class="title">
               <v-icon class="title-icon"  icon="material-symbols-light:stacks-rounded" />
               EXPERIENCE
          </h1>
          <div class="mt-5">
               <div class="relative w-full mx-auto">
               <!-- Vertical line -->
               <div class="absolute left-1/2 top-0 h-full w-[.5px] dark:bg-gray-100/50 bg-gray-300 -translate-x-1/2"></div>

               <ul class="space-y-10">
                    <li  v-for="(item,index) in experiences" class="flex gap-x-10 mb-20 md:mb-[100px] justify-between items-center w-full">
     
                         <div v-scroll="{class:'opacity-0:opacity-1 translate-y-20:translate-x-0'}" v-if="index % 2 == 0"  class="transition duration-1000 ease-in-out card w-full md:w-1/2 text-left px-10 space-y-1">
                              <p class="font-semibold text-2xl">{{item.position}}</p>
                              <p class="text-gray-500">{{item.company}}</p>
                              <p class="text-gray-500">{{item.year}}</p>
                         </div>

                         <div  class="w-1/2 hidden md:block"></div>
                         
                         <div v-scroll="{class:'opacity-0:opacity-1 translate-y-20:translate-x-0'}" v-if="index % 2 === 1" class="transition duration-1000 ease-in-out card w-full md:w-1/2 text-left px-10">
                              <p class="font-semibold text-2xl">{{item.position}}</p>
                              <p class="text-gray-500">{{item.company}}</p>
                              <p class="text-gray-500">{{item.year}}</p>
                         </div>
                    </li>
               </ul>
               </div>

          </div>
     </section>
</template>
<script setup>
import { onMounted } from 'vue';
const experiences = [
     {
          position:"Junior Web Developer",
          company:"Microbiz One Inc. | Makati City ",
          year:"March 2023 – present "
     },
     {
          position:"PHP Developer",
          company:"Kabslash Softec Corp. | Makati City",
          year:"September 2020 - 2023"
     }
];
</script>
<style scoped>
     
</style>