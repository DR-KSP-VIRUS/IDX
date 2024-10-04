<template>
    <nav class="nav-header flex place-items-start place-content-between gap-4 ">
        <h1 class="whitespace-nowrap font-bold text-lg">IDX Withdrawal Channel</h1>
        <div :class="sidebar? 'bg-black/50 fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm':'hidden'">
        </div>
        <ul :class="sidebar?'flex flex-col fixed top-0 right-0 bottom-0 bg-white text-black pt-14 px-2 gap-6 z-20':'hidden place-content-between place-items-center gap-4 md:flex'">
            <span :class="sidebar?' text-red-600 text-4xl absolute top-0 right-0 cursor-pointer':'hidden'" @click="sidebar=false;">&times;</span>
          <li class="px-3 py-1 rounded-full cursor-pointer font-semibold hover:bg-blue-1 hover:text-white"><a href="#setup">Setup</a></li>
          <li class="px-3 py-1 rounded-full cursor-pointer font-semibold hover:bg-blue-1 hover:text-white"><a href="#tracking">Withdrawals</a></li>
          <li class="px-3 py-1 rounded-full cursor-pointer font-semibold hover:bg-blue-1 hover:text-white"><a href="#guide">Setup Guide</a></li>
          <li class="px-3 py-1 rounded-full cursor-pointer font-semibold hover:bg-blue-1 hover:text-white"><a href="#contact">Live Support</a></li>
        </ul>
        <div class="flex flex-col gap-2 p-2 bg-gray-300 text-black cursor-pointer rounded md:hidden" @click="sidebar = true;">
            <span class="border border-b w-8 border-black "></span>
            <span class="border border-b border-black"></span>
            <span class="border border-b border-black"></span>
        </div>
      </nav>
</template>

<script setup>
import { ref } from 'vue';
const sidebar = ref(false);

</script>