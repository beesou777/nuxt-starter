<template>
  <header class="p-8 text-center">
    <NuxtImg class="block mx-auto w-12" src="/favicon.png" alt="App Logo" />
    <h1 class="font-bold mt-12 text-center">{{ t('hello') }}</h1>
    <h2 class="font-semibold mb-2 mt-10">{{ t('welcome') }}</h2>
  </header>

  <main>
    <ul class="flex flex-col gap-2">
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://nuxt.com/modules/security"
          target="_blank"
          title="Nuxt Security Module"
        >
          {{ t('select_language') }}
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://pinia.vuejs.org/ssr/nuxt.html"
          target="_blank"
          title="Pinia Documentation"
        >
          {{ t('pinia') }}
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://tailwindcss.nuxtjs.org"
          target="_blank"
          title="Tailwind CSS for Nuxt"
        >
          {{ t('tailwindcss') }}
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://github.com/nuxt-modules/icon"
          target="_blank"
          title="Nuxt Icon Module"
        >
          {{ t('nuxt_icon') }}
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://vueuse.org/guide/#nuxt"
          target="_blank"
          title="VueUse Documentation"
        >
          {{ t('vueuse') }}
        </a>
      </li>
      <li>
        <a
          class="hover:underline text-blue-500"
          href="https://image.nuxt.com"
          target="_blank"
          title="@nuxt/image Documentation"
        >
          {{ t('nuxt_image') }}
        </a>
      </li>
      <li class="mt-12">
        <language-button />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Eventsist',
})

const { t } = useI18n()
</script>
