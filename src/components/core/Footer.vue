<template>
  <footer
    class="w-full bg-black flex justify-between px-[120px] py-6 border-t border-white absolute bottom-0"
  >
    <p class="text-white">Cars Spot</p>
    <button class="text-white underline text-paragraph-md">
      Polityka prywatności
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style lang="scss" scoped></style>
