<template>
  <div>
    <header class="header">
      <nav class="flex place-items-start place-content-between gap-4">
        <h1>IDX Withdrawal Channel</h1>
        <ul class="hidden place-content-between gap-4 md:flex">
          <li><a href="#setup">Withdrawal Channel Setup</a></li>
          <li><a href="#tracking">Tracking Withdrawals</a></li>
          <div><a href="#contact">Contact Live Support</a></div>
          <div><a href="#guide">Setup Guide</a></div>
        </ul>
      </nav>
    </header>

    <main class="background">
      <section id="setup">
        <h2>Withdrawal Channel Setup</h2>
        <p>Set up your withdrawal channels easily with our comprehensive guide.</p>
        <button onclick="scrollToSection('guide')">Get Started</button>
      </section>

      <section id="tracking">
        <h2>Tracking Withdrawals</h2>
        <p>Monitor your withdrawals in real-time to ensure seamless transactions.</p>
        <button onclick="scrollToSection('contact')">Track Now</button>
      </section>

      <section id="guide">
        <h2>Withdrawal Channel Setup Guide</h2>
        <p>Follow our step-by-step guide to set up your withdrawal channels:</p>
        <ol>
          <li>Choose your withdrawal method (e.g., crypto wallet, bank transfer).</li>
          <li>Verify your account identity.</li>
          <li>Configure your withdrawal settings.</li>
          <li>Test your withdrawal channel with a small amount.</li>
        </ol>
      </section>

      <section id="contact">
        <h2>Contact Live Support</h2>
        <button id="liveChatBtn">Chat with Support</button>
        <div id="liveChat" class="chat-box hidden">
            <div class="chat-header">
              <h3>Live Support</h3>
              <button onclick="toggleChat()">X</button>
            </div>
            <div class="chat-body">
              <p>How can we assist you today?</p>
              <textarea id="chatInput" placeholder="Type your message here..."></textarea>
              <button onclick="sendMessage()">Send</button>
            </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 IDX Withdrawal Channel. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>