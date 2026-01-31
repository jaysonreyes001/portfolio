<template lang="">
     <Navbar/>
     <main class="pt-0 px-5 mt-[-50px] md:mt-0">
          <router-view/>
     </main>
     <Footer/>
     <a v-if="scrollY > 500" href="javascript:void(0)" @click="scrollToTop" 
          class="p-1 shadow-lg dark:shadow-primary-dark/50 shadow-primary/50 transition dark:hover:bg-primary-dark/50 hover:bg-primary-light/50 fixed right-[22px] bottom-[70px] dark:bg-primary-dark bg-primary-light text-white rounded">
          <v-icon class="text-4xl" icon="material-symbols:keyboard-arrow-up"/>
     </a>
     <button @click="chatwithme = !chatwithme" 
          class="p-2  text-sm shadow-lg dark:shadow-primary-dark/50 shadow-primary/50 transition dark:hover:bg-primary-dark/50 hover:bg-primary-light/50 fixed right-[20px] bottom-[10px] dark:bg-primary-dark bg-primary-light text-white rounded">
          <v-icon class="text-3xl" icon="mingcute:message-2-fill"/>
     </button>



<div v-if="chatwithme" class="fixed bottom-16 right-5 z-50 w-full max-w-[350px]">  
  <div class="flex flex-col h-[500px] shadow-2xl rounded-lg overflow-hidden">
    
    <div class="dark:bg-primary-dark bg-primary-light p-4 flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-indigo-300 flex-shrink-0">
          <img  class="rounded-full" src="https://ui-avatars.com/api/?name=Jayson+Reyes&rounded=true"/>
        </div>
        <div class="ml-3 text-white">
          <p class="text-xs font-bold leading-none">Jayson Reyes</p>
          <p class="text-[10px] opacity-80">Typically replies in second</p>
        </div>
      </div>
      <button @click="chatwithme = !chatwithme"  class="text-white hover:bg-indigo-500 rounded p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4 dark:bg-slate-900 bg-gray-50">

      <div class="flex items-end" :class="item.role == 'you' ? 'justify-end' : '' " v-for="(item,index) in chat_list" :key="chat_list">
        <div :class="item.role == 'you' ? 'bg-blue-500 !text-white  rounded-br-none' : 'bg-white dark:bg-slate-800 rounded-bl-none' " class="max-w-[80%]  p-3 rounded-xl text-sm shadow-sm">
               {{item.message}}
        </div>
      </div>


      <div v-if="loading" class="flex items-end" >
        <div  class="bg-white dark:bg-slate-800 max-w-[80%] text-gray-800 p-2 px-4 rounded-xl text-sm shadow-sm">
             <v-icon class="dark:text-white text-black" icon="svg-spinners:3-dots-bounce"/>
        </div>
      </div>


    </div>

    <div class="p-3 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-900 ">
      <div class="flex items-center bg-gray-100 dark:bg-slate-900 rounded-md px-4 py-1">
        <input 
          v-model="message_content"
          type="text" 
          placeholder="Message..." 
          class="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
        >
        <button @click.prevent="submitchatwithme" class="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors">
        <v-icon icon="tabler:send"/>
      </button>
      </div>
    </div>
    
  </div>
</div>
</template>
<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from './Footer.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('AIzaSyDCeydteiNJ1il9htrq5Xk5gTSRwVEcNoc');
const message_content = ref('');
const loading = ref(false);
const chat_list = ref([
     {
          message:"Hello I'm jayson reyes a web developer. Feel free to chat with me",
          role:'me'
     },
]);

const scrollY = ref(0);
const handleScroll = (event) => {
     scrollY.value = window.scrollY;
};



const chatwithme = ref(false);
const route = useRoute();
const currentRoute = ref("home");
currentRoute.value = route.meta.name;

const scrollToTop = () => {
     window.scrollTo({
          top: 0,
          behavior: 'smooth'
     })
}

const submitchatwithme = async () => {
     loading.value = true;
     chat_list.value.push({message:message_content.value,role:'you'});
     const currentMessage = message_content.value;
     message_content.value = '';
     try {
          const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
          const result =  await model.generateContent(currentMessage);
          chat_list.value.push({message:result.response.text(),role:'me'});
     } catch (error) {
          console.error("Error generating content:", error);
     
     }
     finally{
          loading.value = false;
     }
     
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