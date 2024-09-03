<template>
  <div>
    <AppHeader></AppHeader>
    <slot></slot>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../core/Header.vue";
import AppFooter from "../core/MobileMenu.vue";

export default defineComponent({
  name: "AppDesktopLayout",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>

<style lang="scss" scoped></style>
