<template>
  <div class="flex flex-col justify-center">
    <section id="landing" class="fade-in">
      <AppLandingSection></AppLandingSection>
    </section>
    <section id="gallery" class="fade-in">
      <AppGallerySection></AppGallerySection>
    </section>
    <section id="faq" class="fade-in">
      <AppFaqSection></AppFaqSection>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFaqSection from "../components/core/FaqSection.vue";
import AppGallerySection from "../components/core/GallerySection.vue";
import AppLandingSection from "../components/core/LandingSection.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppFaqSection, AppGallerySection, AppLandingSection },
});
</script>
