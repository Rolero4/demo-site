<template>
  <div
    class="z-10 w-full relative max-md:py-[20px] py-[80px] mb-8 max-w-[1440px] px-[80px] mx-auto max-md:px-4 h-[825px]"
  >
    <div class="flex flex-col text-black">
      <h2
        class="font-bebas text-[76.62px] -tracking-[0.04rem] leading-[83.92px]"
      >
        SPRZEDAJEMY SAMOCHODY
        <br />
        Z EUROPY
      </h2>

      <h5 class="mt-8 font-condensed text-paragraph-md">
        Kup komfortowy pojazd, aby każda podróż
        <br />
        była wyjątkowym przeżyciem.
      </h5>

      <div class="flex gap-6 mt-12">
        <AppButton
          text="Zobacz zdjęcia"
          variant="raised"
          @click="scrollTo('gallery')"
        ></AppButton>
        <AppButton text="Zadzwoń do nas" variant="outline"></AppButton>
      </div>
    </div>

    <img
      src="@/assets/images/landing.png"
      alt="landing"
      class="absolute bottom-[110px] right-[80px] w-[1064px] h-[404px]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "../global/Button.vue";
import { scrollTo } from "@/helpers/scrollTo";

export default defineComponent({
  name: "AppLandingSection",
  components: {
    AppButton,
  },
  methods: {
    scrollTo(id: string) {
      scrollTo(id);
    },
  },
});
</script>

<style lang="scss" scoped></style>
