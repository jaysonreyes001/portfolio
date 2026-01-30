<template lang="">
     <section class="min-h-[100dvh] mt-[180px] md:mt-[120px] app-size">
          <div class="md:flex items-center space-y-5 md:space-y-0">
               <button @click="router.back()" class="hover:shadow transition border dark:border-primary-dark/30 dark:border-primary-light/30 shadow-md 
               dark:shadow-primary-dark/30 shadow-primary-light/30 rounded-md px-3 py-2 md:text-md text-xs flex items-center gap-x-1  rounded">
                    <v-icon class="md:text-2xl text-lg mr-1" icon="material-symbols:arrow-left-alt"/>
                    Back
               </button>
               

               <nav class="flex md:ml-10" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                         <li class="text-gray-600 dark:text-gray-200">
                              <div class="flex items-center space-x-1.5">
                              <a href="#" class="text-sm md:text-md inline-flex items-center font-medium text-body hover:text-fg-brand">Projects</a>
                              </div>
                         </li>
                         <li aria-current="page">
                              <div class="flex items-center space-x-1.5">
                              <svg class="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                              <span class="text-sm md:text-lg font-bold inline-flex items-center">{{project_name}}</span>
                              </div>
                         </li>
                    </ol>
               </nav>
          </div>

          <br>
          
          <div class="card">
               <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                         <h1 class="title md:text-5xl text-2xl">{{project_details.name}}</h1>
                         <p class="text-sm md:text-lg">
                              {{project_details.description}}
                         </p>
                         
                         <div class="mt-10">
                              <h1 class="md:text-2xl text-xl font-bold">Key Features</h1>
                              <ul class="text-sm md:text-lg mt-2 space-y-1 text-body list-disc list-inside">
                                   <li v-for="(item,index) in project_details.features" :key="index">
                                        {{item}}
                                   </li>
                              </ul>
                         </div>

                         <div class="mt-10">
                              <h1 class="md:text-2xl text-xl font-bold">Technologies Used</h1>
                              <div class="inline-flex flex-wrap gap-4 mt-3">
                                   <div v-for="(item,index) in project_details.stack" :key="index">
                                        <a href="#" class="dark:bg-primary-dark/10 bg-primary-light/1 border dark:border-primary-dark/50 border-primary-light/40 text-xs font-medium px-3 py-2 rounded">{{item}}</a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div >
                         <!-- <img class="md:h-3/4 w-1/2 w-full rounded-xl border border-primary-light/30" :src="project_details.image"/> -->
                          <div class="grid gap-4">
                              <div>
                                   <img class="h-[250px] md:h-[400px] w-full rounded-lg" :src="`/${currentImage}`" alt="">
                              </div>
                              <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
                                   <div v-for="(item,index) in project_details.image" :key="index">
                                        <img @mouseenter="selectImage(item)" class="cursor-pointer h-[60px] md:h-[80px] w-full max-w-full rounded-md" :src="`/${item}`" alt="">
                                   </div>
                              </div>
                              </div>
                    </div>
               </div>
          </div>
          
          
     </section>
</template>
<script setup>
import Layout from '@/Components/Layout.vue';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { projects } from '@/data/project';
const router = useRouter()
const project_name = ref(router.currentRoute.value.params.project || "");
const project_details = computed(()=>{
     return projects.find(item => item.name == project_name.value);
})

const currentImage = ref(project_details.value.image[0] || "");
console.log(currentImage.value)
const selectImage = (img) => {
     currentImage.value = img;
}
</script>
<style lang="">
     
</style>