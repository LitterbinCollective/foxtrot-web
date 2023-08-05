<script lang="ts" setup>
import { PREFIX } from '@/commands';

const append = ref(false);
const fullElement: Ref<HTMLDivElement | null> = ref(null);
const height = ref('0px');

function click() {
  if (fullElement.value)
    height.value = (height.value === '0px' ? fullElement.value.scrollHeight : 0) + 'px';
  append.value = !append.value;
}

const props = defineProps({
  name: {
    type: String
  },
  command: {
    type: Object
  }
});

const aliases = computed(() => {
  let aliases = '';
  if (props.command && props.command.aliases && props.command.aliases.length > 0)
    aliases += '(' + props.command.aliases.join(', ') + ')';
  return aliases;
});
</script>

<template lang="pug">
div(:class="{ slide: true, append }")
  .front(@click="click")
    span {{ props.name }}
    .aliases {{ aliases }}
  .full(:style="{ height }", ref="fullElement")
    .full--inner
      span {{ props.command.description }}
      .arguments
        commandargument(:command="true") {{ PREFIX + props.name }}
        commandargument(
          v-for="(argument, name) of props.command.arguments",
          :command="false",
          :required="argument.required",
          :tooltip="argument.description"
        ) {{ name }}
</template>

<style lang="scss" src="@/assets/styles/components/command.scss" scoped></style>