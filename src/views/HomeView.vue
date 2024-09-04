<template>
  <section id="#landing"></section>
  <section id="#gallery"></section>
  <section id="#faq">
    <AppFaqSection></AppFaqSection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFaqSection from "../components/core/FaqSection.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppFaqSection },
});
</script>
