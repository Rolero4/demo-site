<template>
  <div class="flex flex-col relative min-h-screen mx-auto bg-background-white">
    <AppHeader></AppHeader>
    <main class="h-full">
      <slot></slot>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppHeader from "../core/Header.vue";

export default defineComponent({
  name: "AppDesktopLayout",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style lang="scss" scoped></style>
