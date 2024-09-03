<template>
  <div
    class="flex flex-col relative min-h-screen mx-auto bg-background-white items-center"
  >
    <div class="w-full max-w-[1440px]">
      <AppHeader>
        <AppHeaderNavigation></AppHeaderNavigation>
      </AppHeader>
      <main class="h-full">
        <slot></slot>
      </main>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppHeader from "../core/Header.vue";
import AppHeaderNavigation from "../core/HeaderNavigation.vue";

export default defineComponent({
  name: "AppDesktopLayout",
  components: {
    AppHeader,
    AppFooter,
    AppHeaderNavigation,
  },
});
</script>

<style lang="scss" scoped></style>
