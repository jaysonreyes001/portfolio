<template lang="">
     <section id="contact" class="my-24 app-size">
          <h1 class="title">
               <v-icon class="title-icon"  icon="material-symbols-light:stacks-rounded" />
               GET IN TOUCH
          </h1>
          <div class="mt-5">
              <div v-scroll="{class:'opacity-0:opacity-1 translate-y-20:translate-y-0'}" class="transition duration-300 ease-in-out card">
                    <div class="grid grid-cols-1 md:grid-cols-2 space-y-20 md:space-y-0">
                         <div>
                              <h1 class="text-xl font-bold">Contact Information</h1>
                              <div class="space-y-10 mt-5">
                                   <div class="flex gap-5 items-center">
                                        <div class="dark:bg-primary-dark bg-primary-light p-3 rounded-md">
                                             <v-icon class="text-2xl text-white" icon="line-md:email"/>
                                        </div>
                                        <div>
                                             <p class="dark:text-secondary-dark text-sm mb-1">Email</p>
                                             <a href="mailto:jaysonreyes012345@gmail.com" class="text-md hover:text-blue-500 transition">jaysonreyes012345@gmail.com</a>
                                        </div>
                                   </div>

                                   <div class="flex gap-4 items-center">
                                        <div class="dark:bg-primary-dark bg-primary-light p-3 rounded-md">
                                             <v-icon class="text-2xl text-white" icon="line-md:phone"/>
                                        </div>
                                        <div>
                                             <p class="dark:text-secondary-dark text-sm mb-1">Phone</p>
                                             <a href="tel:+639123456789" class="text-md hover:text-blue-500 transition">+639123456789</a>
                                        </div>
                                   </div>

                                   <div class="flex gap-4 items-center">
                                        <div class="dark:bg-primary-dark bg-primary-light p-3 rounded-md">
                                             <v-icon class="text-2xl text-white" icon="line-md:map-marker"/>
                                        </div>
                                        <div>
                                             <p class="dark:text-secondary-dark text-sm mb-1">Address</p>
                                             <a href="#" class="text-md transition">Bulacan, Philippines</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <h1 class="text-xl font-bold">Let's Work Together</h1>
                              <form action="#" class="space-y-8 mt-10">
                                   <div>
                                        <label for="name" class="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your name</label>
                                        <input type="text" class="w-full p-3 block rounded dark:bg-background-dark bg-white border dark:border-white/10 border-black/20 focus:outline-black/50 " placeholder="What's your name?" required>
                                   </div>

                                   <div>
                                        <label for="email" class="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your email</label>
                                        <input type="email"  class="w-full p-3 block rounded dark:bg-background-dark bg-white border dark:border-white/10 border-black/20 focus:outline-black/50 " placeholder="What's your email" required>
                                   </div>

                                   <div class="sm:col-span-2">
                                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" rows="6"  class="w-full p-3 block rounded dark:bg-background-dark bg-white border focus:outline-black/50 dark:border-white/10 border-black/20" placeholder="Leave a comment..."></textarea>
                                   </div>

                                   <button type="submit" class="float-right w-full md:w-auto justify-center transition rounded shadow-lg dark:shadow-primary-dark/50 shadow-primary-light/50 inline-flex items-center text-body 
                                   dark:bg-primary-dark bg-primary-light text-white dark:hover:bg-primary-dark/70 hover:bg-primary-light/70 hover:shadow-md hover:text-heading 
                                   focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                                        Send Message
                                   <v-icon class="ml-1 text-lg" icon="tabler:send"/>
                                   </button>
                              </form>
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