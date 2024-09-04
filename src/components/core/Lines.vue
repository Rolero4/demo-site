<template>
  <div class="svg-block">
    <img
      :src="require(`@/assets/svg/${icon_left}`)"
      :alt="icon_left"
      class="relative z-0"
    />
    <img
      :src="require(`@/assets/svg/${icon_right}`)"
      :alt="icon_right"
      class="relative z-0"
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
  @apply flex z-0 absolute top-0 right-0;
}
</style>
