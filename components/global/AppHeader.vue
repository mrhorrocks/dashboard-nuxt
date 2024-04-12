<template>
  <section id="app-header">
    <div class="container-full">
      <header class="app-header">
        <TheNavigation />
      </header>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

section#app-header {
  background-color: gray;
}

header.app-header {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  // padding: 0 0.5rem;
  background-color: $primary-green;
}
</style>
