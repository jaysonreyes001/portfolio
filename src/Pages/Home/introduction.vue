<template lang="">
     <section id="home" class="min-h-[100dvh] flex flex-col justify-center app-size">
          <div class="card">
               <div class="max-w-xl py-10 md:py-20 space-y-5">
                    <h1 class="text-3xl md:text-6xl font-extrabold">
                         <div class="animate-appearleft">
                              <span class="dark:text-primary-dark text-primary-light">WEB</span>
                         </div>
                         <div class="animate-appearright">
                              <span class="dark:text-white ml-0 md:ml-7">DEVELOPER</span>
                         </div>
                         
                    </h1>
                    <p class="dark:text-secondary-dark text-sm sm:text-lg">
                         Hi! I'm 
                         <span class="dark:text-primary-dark text-primary-light font-bold">Jayson Reyes</span>. 
                         A developer with 4+ years of backend experience and 2+ years in frontend development, specializing in building high-performance, scalable, and responsive web applications.
                    </p>
                    <button @click.prevent="openCv" type="button" class="shadow-lg dark:shadow-primary-dark/50 shadow-primary-light/50
                    flex items-center transition text-white dark:bg-primary-dark bg-primary-light box-border 
                    border border-transparent dark:hover:bg-primary-dark/50 hover:bg-primary-light/50 focus:ring-4 
                    dark:focus:ring-primary-dark focus:ring-primary-light shadow-xs font-medium leading-5 
                    rounded text-sm px-4 py-2.5 focus:outline-none">
                         <v-icon class="text-lg mr-1" icon="material-symbols:download"/>
                         Download CV
                    </button>
               </div>
          </div>
     </section>
</template>
<script setup>

const openCv = () => {
    window.open('/JaysonReyes.pdf', '_blank');
}

</script>
<style lang="">
     
</style>