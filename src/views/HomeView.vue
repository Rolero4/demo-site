<template>
  <div class="flex flex-col justify-center">
    <section id="#landing"></section>
    <section id="#gallery">
      <AppGallerySection></AppGallerySection>
    </section>
    <section id="#faq">
      <AppFaqSection></AppFaqSection>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFaqSection from "../components/core/FaqSection.vue";
import AppGallerySection from "../components/core/GallerySection.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppFaqSection, AppGallerySection },
});
</script>
