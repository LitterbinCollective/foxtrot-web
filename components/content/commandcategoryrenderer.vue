<script setup lang="ts">
import Commands from '@/commands';

const props = defineProps({
  category: {
    type: String,
    required: true
  }
});

const category = computed(() => Commands[props.category]);
</script>

<template lang="pug">
.renderer
  p {{ category.description }}
  .commands
    command(
      v-for="(command, name) in category.commands",
      :name="name",
      :command="command"
    )
</template>

<style lang="scss" scoped>
.renderer {
  p {
    margin-bottom: 1em;
  }

  .commands {
    :deep(.slide) {
      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
}
</style>