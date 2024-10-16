<template>
  <div class="">
    <form action="" :schema="schema" @submit="submit">
      <input type="text" v-model="state.name" />
      <input type="email" v-model="state.email" />
      <button>submit</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
  name: '',
  email: '',
});

const submit = (e: Event) => {
  e.preventDefault();
  console.log(state);
};
</script>
<style scoped lang="scss">
</style>