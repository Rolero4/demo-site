<template>
  <h2
    class="text-white text-justify text-header-lg leading-[37.5px] font-bebas w-full"
  >
    {{ header }}
  </h2>
  <p class="text-white text-justify font-condensed">
    <span v-if="isExpanded">
      {{ text }}
    </span>
    <span v-else>
      <span>{{ trucateText(text) }}</span>
      <span>[...]</span>
    </span>
  </p>
  <button
    @click="toggle"
    class="underline flex gap-1 text-white font-condensed"
  >
    <span>{{ isExpanded ? "Zwiń" : "Rozwiń" }}</span>
    <v-icon :name="isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'" />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFaqElement",
  props: {
    header: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isExpanded = ref(false);
    const maxLength = 180;

    const toggle = (): void => {
      isExpanded.value = !isExpanded.value;
    };

    const trucateText = (text: string): string => {
      return text.slice(0, maxLength);
    };

    return {
      isExpanded,
      trucateText,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped></style>
