<template>
  <AppMobileLayout v-if="isMobile">
    <slot></slot>
  </AppMobileLayout>
  <AppDesktopLayout v-else>
    <slot></slot>
  </AppDesktopLayout>
</template>

<script lang="ts">
import AppDesktopLayout from "@/components/layout/DesktopLayout.vue";
import AppMobileLayout from "@/components/layout/MobileLayout.vue";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "AppLayout",
  components: {
    AppMobileLayout,
    AppDesktopLayout,
  },
  setup() {
    const isMobile = ref(false);

    const checkScreenSize = (): void => {
      isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenSize);
    });

    return { isMobile };
  },
});
</script>

<style lang="scss" scoped></style>
