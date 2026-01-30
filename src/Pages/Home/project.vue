<template lang="">
     <section id="project" class="my-24 app-size">
          <h1 class="title">
               <v-icon class="title-icon"  icon="material-symbols-light:stacks-rounded" />
               PROJECTS
          </h1>
          <div class="mt-5">
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-5">
                    <div  v-scroll="{class:'opacity-0:opacity-1 translate-y-20:translate-y-0'}" v-for="(item,index) in projects" 
                    class="group hover:-translate-y-3 card p-5 flex flex-col justify-between shadow transition duration-1000 ease-in-out">
                    <div>
                         <div class="overflow-hidden rounded">
                              <a href="#">
                                   <img  class="group-hover:scale-125 h-48 w-full transition duration-1000 rounded" :src="item.image[0]" alt="" />
                              </a>
                         </div>
                         <a href="#">
                              <h5 class="mt-6 mb-2 text-xl font-extrabold text-heading dark:text-white  text-black">{{item.name}}</h5>
                         </a>
                         <p class="mb-6 line-clamp-4 text-sm text-gray-500 ">{{item.description}}</p>
                    </div>
                    
                    <div class="flex justify-end">
                         <router-link :to="{name:'Project',params:{project:item.name}}" class="transition rounded shadow-lg dark:shadow-primary-dark/50 shadow-primary-light/50 inline-flex items-center text-body dark:bg-primary-dark bg-primary-light text-white dark:hover:bg-primary-dark/70 hover:bg-primary-light/70 hover:shadow-md hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                         View more
                         <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                         </router-link>
                    </div>
               </div>
               </div>
          </div>
     </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { projects } from '@/data/project';
</script>
<style scoped>
     
</style>