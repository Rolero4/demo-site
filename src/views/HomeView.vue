<template>
  <div class="home">
    <div>home page</div>
    <AppButton variant="outline" text="test"> </AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from "@/components/global/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { AppButton },
});
</script>
