<template>
  <section id="#landing"></section>
  <section id="#gallery"></section>
  <section id="#faq">
    <FaqSection></FaqSection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FaqSection from "../components/core/FaqSection.vue";

export default defineComponent({
  name: "HomeView",
  components: { FaqSection },
});
</script>
