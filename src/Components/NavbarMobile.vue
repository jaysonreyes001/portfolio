<template lang="">
     <div @click="closeSideBar" v-if="isMobileOpen" class="fixed h-full w-full top-0 left-0 bg-black/50 z-[99]">
     </div>
     <aside :class="!isMobileOpen ? '-translate-x-full' : 'translate-x-0' " class="dark:bg-background-dark bg-background-light transition h-full bg-white fixed left-0 top-0 right-0 bottom-0 w-64 z-[100]">
          <div class="relative flex flex-col h-full max-h-full ">
               <!-- Header -->
               <header class=" p-4 flex justify-between items-center gap-x-2 mb-2">

                    <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-black " href="#" aria-label="Brand">
                         <span class="dark:text-primary-dark text-primary-light font-bold">
                         Jayson's</span> <span class='dark:text-white text-black'>Portfolio</span>
                    </a>

                    <div class="lg:hidden -me-2">
                         <!-- Close Button -->
                         <button @click="closeSideBar" type="button" class="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-sidebar-basic-usage">
                         <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                         <span class="sr-only">Close</span>
                         </button>
                         <!-- End Close Button -->
                    </div>
               </header>
               <!-- End Header -->

               <!-- Body -->
               <nav class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <div class=" pb-0 px-2  w-full flex flex-col flex-wrap" >
                         <ul class="space-y-1">
                              <li v-for="(menu,index) in props.menus">
                                   <a :class="menu.href == activeMenu ? 'dark:bg-primary-dark bg-primary-light dark:text-black text-white'  : 'dark:text-white text-black'" @click.prevent='scrollToSection(menu.href,$event)' class=" flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg" href="#">
                                        <v-icon v-if="menu.icon" :icon="menu.icon" class="text-xl"/>
                                        {{menu.name}}
                                   </a>
                              </li>
                         </ul>
                    </div>
               </nav>
               <!-- End Body -->

               <div class="p-5 flex-none border-t dark:border-white/20">
                    <a href="#" @click.prevent="toggleDarkMode()"
                         class="block text-xl dark:text-white text-black " aria-current="page">
                         <div class="flex items-center text-sm" v-if="!isDarkMode">
                              <v-icon class="mr-2" icon="ic:outline-dark-mode"/>
                              Light
                         </div>
                         <div class="flex space-x-4 items-center text-sm" v-else>
                              <v-icon class="mr-2" icon="ic:outline-light-mode"/>
                              Dark
                         </div>
                    </a>
               </div>
          </div>
     </aside>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['menus','mobileSideBar']);
const emits = defineEmits(['mobileSideBarStatus','changeThemeUpdate'])
const isMobileOpen = ref(false);
const isDarkMode = ref(false);
const activeMenu = ref('home');
const closeSideBar = () => {
     isMobileOpen.value = !isMobileOpen.value;
     emits('mobileSideBarStatus',false);
}

const toggleDarkMode = () => {
     isDarkMode.value = !isDarkMode.value;
     if (isDarkMode.value) {
          document.documentElement.classList.add('dark')
     } else {
          document.documentElement.classList.remove('dark')
     }
     emits('changeThemeUpdate',isDarkMode.value);
}

const scrollToSection = (section,e) => {
     activeMenu.value = section;
     const el = document.getElementById(section)
     if(e.currentTarget){
          const y = el.offsetTop - 130;
               window.scrollTo({
               top: y,
               behavior: 'smooth'
          })
     }
     closeSideBar();
}

onMounted(()=>{
     watch(()=>props.mobileSideBar,(oldval,newval)=>{
          if(props.mobileSideBar){
               isMobileOpen.value = true
          }
     })
})
</script>
<style lang="">
     
</style>