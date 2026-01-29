<template lang="">
     <section class="min-h-[100dvh] mt-[100px] app-size">
          <div>
               <button @click="router.back()" class="text-md flex items-center gap-x-2 px-4 py-2 rounded font-bold">
                    <v-icon class="text-2xl" icon="material-symbols:arrow-left-alt"/>
                    Back
               </button>
          </div>
     </section>
</template>
<script setup>
import Layout from '@/Components/Layout.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style lang="">
     
</style>