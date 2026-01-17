<template lang="">
     <section id="project" class="my-24 app-size">
          <h1 class="title">
               <v-icon class="mr-4 mt-[-1px] text-5xl"  icon="material-symbols-light:stacks-rounded" />
               PROJECTS
          </h1>
          <div class="mt-5">
               <div class="grid grid-cols-1 sm:grid-cols-3 mb-20 gap-10">
                    <div  v-scroll="{class:'opacity-0:opacity-1 translate-y-20:translate-y-0'}" v-for="(item,index) in projects" 
                    class="group card flex flex-col justify-between shadow-lg transition duration-500 ease-in-out">
                    <div>
                         <div class="overflow-hidden rounded">
                              <a href="#">
                                   <img  class="group-hover:scale-125 transition rounded" :src="item.image" alt="" />
                              </a>
                         </div>
                         <a href="#">
                              <h5 class="mt-6 mb-2 text-xl font-extrabold text-heading dark:text-white  text-black">{{item.name}}</h5>
                         </a>
                         <p class="mb-6 line-clamp-4 text-sm text-gray-500 ">{{item.description}}</p>
                    </div>
                    
                    <div class="flex justify-end">
                         <a href="#" class="transition rounded shadow-lg dark:shadow-primary-dark/50 shadow-primary-light/50 inline-flex items-center text-body dark:bg-primary-dark bg-primary-light text-white dark:hover:bg-primary-dark/70 hover:bg-primary-light/70 hover:shadow-md hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                         View more
                         <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                         </a>
                    </div>
               </div>
               </div>
          </div>
     </section>
</template>
<script setup>
import { onMounted } from 'vue';
import ims from "@/assets/ims.png";
import anime from "@/assets/anime.png";
import sdn from "@/assets/sdn.png";
const projects = [
     {
          name:"Incident Management System",
          description:"An Incident Management System (IMS) is a tool that helps organizations efficiently track, manage, and resolve incidents or issues. It ensures quick response, minimizes downtime, improves communication, and maintains a record of incidents for analysis and prevention of future occurrences.",
          image:ims
     },
     {
          name:"Province Health Office (Surigao Del Norte)",
          description:"The Provincial Health Office of Surigao del Norte is committed to protecting and promoting the health and well-being of communities across the province. Through efficient public health programs, disease prevention initiatives, health education, and accessible medical services, the office works closely with local government units, health facilities, and partner organizations to deliver quality healthcare for all Surigaonons.",
          image:sdn
     },
     {
          name:"Otakuhub Stream",
          description:"An anime streaming platform is a service that allows users to watch anime online, offering a wide range of series and movies on-demand. It provides features like subtitles, dubbed versions, and personalized recommendations for anime fans.",
          image:anime
     },
];
</script>
<style scoped>
     
</style>