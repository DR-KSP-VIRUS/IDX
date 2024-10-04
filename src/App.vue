<template>
  <div>
    <header class="header">
      <Navbar/>
    </header>

    <main class="background">
      <MainContent/>
    </main>

    <footer class="footer">
      <p class="rounded md:w-[820px] text-gray-400">&copy; 2024 IDX Withdrawal Channel. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import MainContent from './components/MainContent.vue';
import Navbar from './components/Navbar.vue';

</script>