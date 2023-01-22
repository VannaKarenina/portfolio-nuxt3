<template>
  <ClientOnly>
    <nav id="bottombar">
      <div class="justify-content-center align-content-center">
        <p class="bottombar__text">
          Made by
          <nuxt-link to="https://github.com/VannaKarenina" style="color: #ffcc00">
            VannaKarenina
          </nuxt-link>
          with ♥
        </p>
      </div>
    </nav>
  </ClientOnly>
</template>

<script>
export default {
  name: "BottomBase"
}
</script>

<style scoped lang="scss">
@import "assets/style/scss/variables";
.bottombar {
  align-self: center;
  align-items: center;

  &__text {
    align-items: center;
    text-align: center;
    font-size: medium;
  }
}

@media screen and (max-width: $screen-sm) {
  .bottombar__text {
    font-size: small;
  }
}

</style>
