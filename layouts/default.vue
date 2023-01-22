<template>
  <div>
    <NavigationBase/>
    <slot/>
    <FooterBase/>
  </div>
</template>

<script>
import NavigationBase from "~/components/Base/NavigationBase.vue";
import FooterBase from "~/components/Base/FooterBase.vue";

export default {
  name: "default",
  components: {FooterBase, NavigationBase}
}
</script>

<style scoped>

</style>
