<template lang="">
     <section id="stack" class="my-24 app-size mt-[-150px] md:mt-[100px]">
          <h1 class="title">
               <v-icon class="title-icon"  icon="material-symbols-light:stacks-rounded" />
               STACK
          </h1>
          <div class="card">
               <div class="mt-5">
                    <div  v-for="(item,index) in mystack" class="grid grid-cols-1 sm:grid-cols-2 mb-20">
                         <span class="dark:text-white text-2xl sm:text-2xl font-extrabold">{{item.title}}</span>
                         <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 sm:mt-0">
                              <div v-scroll="{class:'opacity-0:opacity-1 translate-y-10:translate-y-0'}" 
                                   v-for="(sub_item,sub_index) in item.stack"
                                   class="flex items-center transition duration-300 ease-in-out" >
                                   <v-icon class="mr-2 text-3xl lg:text-4xl mr-4" :icon="sub_item.icon"/>
                                   <span class="dark:text-secondary-dark font-semibold text-md">{{sub_item.title}}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>
<script setup>
import { onMounted } from 'vue';

     const mystack = [
          {
               title:"Frontend",
               stack:[
                    {
                         title:"JavaScript",
                         icon:"devicon:javascript"
                    },
                    {
                         title:"Vue.Js",
                         icon:"devicon:vuejs"
                    },
                    {
                         title:"Tailwind CSS",
                         icon:"devicon:tailwindcss"
                    },
                    {
                         title:"Bootstrap",
                         icon:"devicon:bootstrap"
                    }
               ]
          },
          {
               title:"Backend",
               stack:[
                    {
                         title:"PHP",
                         icon:"devicon:php",
                    },
                    {
                         title:"Laravel",
                         icon:"devicon:laravel",
                    },
                    {
                         title:"Python",
                         icon:"devicon:python",
                    },
                    {
                         title:"Node.Js",
                         icon:"devicon:nodejs",
                    },
               ]
          },
          {
               title:"Database",
               stack:[
                    {
                         title:"MySQL",
                         icon:"devicon:mysql",
                    },
                    {
                         title:"MariaDB",
                         icon:"devicon:mariadb",
                    },
               ]
          },
          {
               title:"Tools",
               stack:[
                    {
                         title:"Git",
                         icon:"devicon:git",
                    },
                    {
                         title:"Docker",
                         icon:"devicon:docker",
                    },
               ]
          }
     ];
</script>
<style scoped>
     
</style>