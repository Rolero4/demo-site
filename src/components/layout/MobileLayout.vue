<template>
  <div>
    <AppMobileHeader></AppMobileHeader>
    <slot></slot>
    <AppFooter></AppFooter>
    <AppMobileMenu></AppMobileMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../core/Footer.vue";
import AppMobileHeader from "../core/MobileHeader.vue";
import AppMobileMenu from "../core/MobileMenu.vue";

export default defineComponent({
  name: "AppMobileLayout",
  components: {
    AppMobileHeader,
    AppFooter,
    AppMobileMenu,
  },
});
</script>

<style lang="scss" scoped></style>
