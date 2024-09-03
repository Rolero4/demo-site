<template>
  <div class="home">
    <div>home page</div>
    <AppButton variant="outline" text="test"> </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/global/Button.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: { AppButton },
});
</script>
