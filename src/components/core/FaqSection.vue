<template>
  <div class="flex bg-black w-full justify-center">
    <div
      class="max-w-[1440px] w-full flex flex-wrap justify-between px-[120px]"
    >
      <div
        v-for="item in faqItems"
        :key="item.id"
        class="w-[574px] max-md:w-full"
      >
        <FaqElement :header="item.header" :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FaqElement from "../global/FaqElement.vue";

export default defineComponent({
  name: "AppFaqSection",
  components: {
    FaqElement,
  },
  data() {
    return {
      faqItems: [
        {
          header:
            "ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.",
          text: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et",
          id: 0,
        },
        {
          header:
            "ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.",
          text: "Another FAQ text that might be a bit longer or shorter. Adjust the content as needed.",
          id: 1,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
