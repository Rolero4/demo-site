<template>
  <div>
    mobile
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppMobileLayout",
});
</script>

<style lang="scss" scoped></style>
