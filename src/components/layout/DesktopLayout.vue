<template>
  <div>
    desktop
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDesktopLayout",
});
</script>

<style lang="scss" scoped></style>
