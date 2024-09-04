<template>
  <div
    class="z-10 w-full relative max-md:py-[20px] py-[80px] mb-8 max-w-[1440px] px-[80px] mx-auto max-md:px-0 h-[825px] max-md:h-[calc(100vh-100px)]"
  >
    <div class="flex flex-col text-black max-md:px-4">
      <h2
        class="font-bebas text-[76.62px] -tracking-[0.04rem] leading-[83.92px] max-md:text-[48px] max-md:leading-[56px] max-md:mt-4"
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
      loading="lazy"
      class="absolute z-[-1] bottom-[110px] right-0 max-w-[1064px] h-[404px] max-md:w-screen max-md:h-auto max-md:bottom-[40px] object-cover max-md:mt-8 fade-in"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "../global/Button.vue";

export default defineComponent({
  name: "AppLandingSection",
  components: {
    AppButton,
  },
  methods: {
    scrollTo(id: string): void {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
