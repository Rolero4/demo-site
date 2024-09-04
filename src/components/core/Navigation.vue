<template>
  <a
    href="#gallery"
    class="text-black text-paragraph-md font-flex"
    @click="scrollTo('gallery')"
    >Galeria zdjęć</a
  >
  <a
    href="#faq"
    class="text-black text-paragraph-md font-flex"
    @click="scrollTo('faq')"
    >FaQ</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavigation",
  methods: {
    scrollTo(id: string) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
