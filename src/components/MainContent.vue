<template>
    <div class="mt-10">
      <section id="setup" class="card">
        <h2 class="h2">Withdrawal Channel Setup</h2>
        <p class="text">Set up your withdrawal channels easily with our comprehensive guide.</p>
        <button onclick="scrollToSection('guide')" class="btn-primary">Get Started</button>
      </section>

      <section id="tracking" class="card">
        <h2 class="h2">Tracking Withdrawals</h2>
        <p class="text">Monitor your withdrawals in real-time to ensure seamless transactions.</p>
        <button onclick="scrollToSection('contact')" class="btn-primary">Track Now</button>
      </section>

      <section id="guide" class="md:w-[820px]">
        <h2 class="h2">Withdrawal Channel Setup Guide</h2>
        <p class="text">Follow our step-by-step guide to set up your withdrawal channels:</p>
        <ol class="grid grid-cols-2 gap-3 md:grid-cols-4">
          <li class="bg-white shadow-md rounded w-full">
            <img class="h-1/2 w-full" src="/images/ring-1.jpeg"/>
            <h3 class="px-2 font-semibold">Step 1</h3>
            <p class="text px-2">Choose your withdrawal method (e.g., crypto wallet, bank transfer).</p>
          </li>
          <li class="bg-white shadow-md rounded w-full">
            <img class="h-1/2 w-full" src="/images/ring-2.jpeg"/>
            <h3 class="px-2 font-semibold">Step 2</h3>
            <p class="text px-2">Verify your account identity.</p>
          </li>
          <li class=" bg-white shadow-md rounded w-full">
            <img class="h-1/2 w-full" src="/images/ring-3.jpeg"/>
            <h3 class="px-2 font-semibold">Step 3</h3>
            <p class="text px-2">Configure your withdrawal settings.</p>
          </li>
          <li class=" bg-white shadow-md rounded w-full min-h-20">
            <img class="h-1/2 w-full" src="/images/ring-4.jpg"/>
            <h3 class="px-2 font-semibold">Step 4</h3>
            <p class="text px-2">Test your withdrawal channel with a small amount.</p>
          </li>
        </ol>
      </section>

      <section id="contact" class="card w-full">
        <h2 class="h2">Contact Live Support</h2>
        <button id="liveChatBtn" class="btn-primary">Chat with Support</button>
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
    </div>
</template>