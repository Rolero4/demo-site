<template>
  <div class="svg-block">
    <img
      :src="require(`@/assets/svg/${icon_left}`)"
      :alt="icon_left"
      class="absolute top-0 right-[210px] z-20"
    />
    <img
      :src="require(`@/assets/svg/${icon_right}`)"
      :alt="icon_right"
      class="absolute top-[-10px] right-0 z-20"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppLines",
  data() {
    const icon_left = "vector_left.svg";
    const icon_right = "vector_right.svg";

    return {
      icon_left,
      icon_right,
    };
  },
});
</script>

<style scoped>
.svg-block {
  @apply flex absolute top-0 right-[60px] w-[471px] h-[668px];
}
</style>
