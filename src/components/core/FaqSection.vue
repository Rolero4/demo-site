<template>
  <div class="flex bg-black w-full justify-center py-[88px] max-md:py-6">
    <div
      class="max-w-[1440px] w-full flex gap-x-[52px] gap-y-10 flex-wrap justify-center px-[120px] max-md:px-4"
    >
      <div
        v-for="item in faqItems"
        :key="item.id"
        class="w-[574px] max-md:w-full"
      >
        <AppFaqElement :header="item.header" :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFaqElement from "../global/FaqElement.vue";

export default defineComponent({
  name: "AppFaqSection",
  components: {
    AppFaqElement,
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
          text: "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et Mauris varius ipsum mauris, rutrum lobortis magna efficitur a, Donec egestas, nisl vegicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et",
          id: 1,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
