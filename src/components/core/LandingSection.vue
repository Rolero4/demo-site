<template>
  <div
    class="flex flex-col relative z-10 w-full max-md:py-[20px] gap-12 py-[120px] mb-8 max-w-[1440px] mx-auto max-md:px-4 h-[825px]"
  >
    <img
      src="@/assets/images/landing.png"
      alt="landing"
      class="absolute bottom-[110px] right-0 w-[1064px] h-[404px]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import AppLines from "./Lines.vue";
export default defineComponent({
  name: "AppLandingSection",
  components: {
    // AppLines,
  },
});
</script>

<style lang="scss" scoped></style>
