<template>
  <a
    class="text-black text-paragraph-md font-flex hover:scale-[1.05] z-30 cursor-pointer"
    @click.prevent="scrollTo('gallery')"
    >Galeria zdjęć</a
  >
  <a
    class="text-black text-paragraph-md font-flex hover:scale-[1.05] z-30 cursor-pointer"
    @click.prevent="scrollTo('faq')"
    >FaQ</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scrollTo } from "@/helpers/scrollTo";

export default defineComponent({
  name: "AppNavigation",
  methods: {
    scrollTo(id: string) {
      scrollTo(id);
    },
  },
});
</script>

<style lang="scss" scoped></style>
