<script setup lang="ts">
const props = defineProps({
  command: {
    type: Boolean
  },
  tooltip: {
    type: String
  },
  required: {
    type: Boolean
  }
});

const elementClass = computed(() => (
  {
    argument: !props.command,
    command: props.command,
    required: !props.command && props.required
  }
));
</script>

<template lang="pug">
VTooltip(
  theme="ft-tooltip",
  v-if="props.tooltip"
  :class="elementClass"
)
  span
    slot
  template(#popper) {{ props.tooltip }}
div(v-else, :class="elementClass")
  span
    slot
</template>

<style lang="scss" src="@/assets/styles/components/commandargument.scss" scoped></style>