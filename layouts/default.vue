<template>
  <div>
    <NavigationBase/>
    <slot/>
  </div>
</template>

<script>
import NavigationBase from "~/components/Base/NavigationBase.vue";

export default {
  name: "default",
  components: {NavigationBase}
}
</script>

<style scoped>

</style>
