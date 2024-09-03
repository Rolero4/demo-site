<template>
  <div
    class="flex flex-col relative min-h-screen mx-auto bg-background-white w-full"
  >
    <AppHeader></AppHeader>
    <slot></slot>
    <AppFooter></AppFooter>
    <AppMobileMenu></AppMobileMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppHeader from "../core/Header.vue";
import AppMobileMenu from "../core/MobileMenu.vue";

export default defineComponent({
  name: "AppMobileLayout",
  components: {
    AppHeader,
    AppFooter,
    AppMobileMenu,
  },
});
</script>

<style lang="scss" scoped></style>
