<script lang="ts" setup>
const quotes = [
  'made by an annoying person for annoying people',
  '...and even louder and noiser than ever',
  "and it's free and open source!",
  'bzzzzzzzzz',
  'we cannot guarantee that your hearing will not be damaged'
];

const random = computed(() => {
  return quotes[Math.floor(Math.random() * quotes.length)];
});
</script>

<template lang="pug">
span {{ random }}
</template>