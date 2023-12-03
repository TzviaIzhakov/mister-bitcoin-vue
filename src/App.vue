<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue';
</script>

<template>
   <Transition>
        <UserMsg />
    </Transition>
  <AppHeader/>
  <main class="main-layout full">
    <RouterView/>
  </main>
  <AppFooter/>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
