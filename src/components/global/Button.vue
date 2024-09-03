<template>
  <button class="btn" :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonVariant } from "../../model/misc.model";

export default defineComponent({
  name: "AppButton",
  props: {
    variant: {
      type: String as () => ButtonVariant,
      default: "raised",
    },
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClass(): string {
      switch (this.variant) {
        case "outline":
          return "btn-outline";
        case "raised":
          return "btn-raised";
        default:
          return "";
      }
    },
  },
  methods: {
    handleClick(event: Event) {
      this.$emit("click", event);
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  @apply px-4 py-2 text-base font-semibold rounded-md transition;

  &-outline {
    @apply bg-blue-500    text-white    shadow-md    hover:bg-blue-600;
  }

  &-raised {
    @apply bg-transparent border-2    border-blue-500    text-blue-500    hover:bg-blue-500    hover:text-white;
  }
}
</style>
