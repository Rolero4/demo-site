<template>
  <AppMobileLayout v-if="isMobile">
    <AppContent></AppContent>
  </AppMobileLayout>
  <AppDesktopLayout v-else>
    <AppContent></AppContent>
  </AppDesktopLayout>
</template>

<script lang="ts">
import AppContent from "@/components/layout/Content.vue";
import AppDesktopLayout from "@/components/layout/DesktopLayout.vue";
import AppMobileLayout from "@/components/layout/MobileLayout.vue";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "AppLayout",
  components: {
    AppMobileLayout,
    AppDesktopLayout,
    AppContent,
  },
  setup() {
    const isMobile = ref(false);

    const checkScreenSize = (): void => {
      isMobile.value = window.innerWidth <= 768;
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
