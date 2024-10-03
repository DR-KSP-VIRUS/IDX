<template>
  <div>
    <header class="header">
      <Navbar/>
    </header>

    <main class="background">
      <MainContent/>
    </main>

    <footer class="bg-white py-6 flex place-items-center flex-col px-8 ">
      <p class="rounded px-3 md:w-[820px] text-gray-400">&copy; 2024 IDX Withdrawal Channel. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import MainContent from './components/MainContent.vue';
import Navbar from './components/navbar.vue';

</script>