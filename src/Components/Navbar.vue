<template lang="">
     
     <nav class="fixed w-full z-20 top-0 start-0 border-b dark:border-white/5 border-black/10 bg-opacity-30 backdrop-blur-md">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <img v-if="isDarkMode" class="md:hidden rounded-full w-12" src="https://ui-avatars.com/api/?name=Jayson+Reyes&rounded=true&color=ffffff&background=ee6611"/>
                    <img v-else class="md:hidden rounded-full w-12" src="https://ui-avatars.com/api/?name=Jayson+Reyes&rounded=true&color=ffffff&background=d62828"/>
                    <a href="https://flowbite.com/" class="hidden md:block flex items-center space-x-3 rtl:space-x-reverse">
                         <span class="self-center text-2xl text-heading font-semibold whitespace-nowrap"><span class="dark:text-primary-dark text-primary-light">Jayson's</span> Portfolio.</span>
                    </a>
               <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <v-icon @click="changeTheme" v-if="isDarkMode" icon="bx:sun" class="text-2xl hidden md:flex cursor-pointer"/>
                    <v-icon @click="changeTheme" v-else icon="bx:moon" class="text-2xl hidden md:flex cursor-pointer"/>
                    <button @click="handleMobileSideBar" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden dark:hover:bg-primary-dark hover:bg-primary-light hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                         <v-icon icon="bx:menu" class="text-xl" />
                    </button>
               </div>
               <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="text-md flex flex-col p-4 md:p-0 mt-4 border border-default md:flex-row md:space-x-8 md:mt-0 md:border-0 text-secondary-dark">
                         <li v-for="(item,index) in menu" :id="`${item.href}-nav`" @click.prevent="scrollToSection(item.href,$event)">
                              <a href="#" :class="activeMenu == item.href ? 'font-bold dark:text-primary-dark text-primary-light' :  'dark:text-white text-black' " class="transition font-semibold block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">
                                   {{item.name}}
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     </nav>
     <NavbarMobile @changeThemeUpdate="changeTheme" @mobileSideBarStatus="handleMobileSideBar" :menus="menu" :mobileSideBar="isOpenSideBar"/>

</template>
<script setup>
import { onMounted, ref } from 'vue'
import NavbarMobile from './NavbarMobile.vue';
import theme from '@/scripts/theme';
const isDarkMode = ref( theme == 'light' ?  false : true);
const isOpenSideBar = ref(false);


const menu = [
     {
          name:'Home',
          href:'home',
          icon:"solar:home-2-linear"
     },
     {
          name:'Stack',
          href:'stack',
          icon:'material-symbols-light:stacks-rounded'
     },
     {
          name:'Experience',
          href:'experience',
          icon:'solar:explicit-linear'
     },
     {
          name:'Project',
          href:'project',
          icon:'solar:book-2-linear'
     },
     {
          name:'Contact',
          href:'contact',
          icon:'solar:book-2-linear'
     },
];
const activeMenu = ref('home');
const handleScrolltoSection = (e) => {
     const sections = document.querySelectorAll('section')
     const scrollPos = window.scrollY + 250
     sections.forEach(each=>{
          const top = each.offsetTop
          const height = each.offsetHeight

          if (scrollPos >= top && scrollPos < top + height) {
               activeMenu.value = each.id;
               // scrollToSection(each,document.getElementById(each.id+'-nav'))
          }
     })
}
const scrollToSection = (section,e) => {
     activeMenu.value = section;
     const el = document.getElementById(section)
     if(e.currentTarget){
          const y = el.offsetTop - 100;
               window.scrollTo({
               top: y,
               behavior: 'smooth'
          })
     }
}

const changeTheme = () => {
     isDarkMode.value = !isDarkMode.value;
     if(isDarkMode.value){
          document.documentElement.classList.add('dark')
     }
     else{
          document.documentElement.classList.remove('dark');
     }
     localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

const handleMobileSideBar = (val) => {
     isOpenSideBar.value = !isOpenSideBar.value;
}

onMounted(()=>{
     window.addEventListener('scroll',handleScrolltoSection);
})
</script>
<style lang="">
     
</style>