<script>
export default {
  data () {
    return {
      // Mobile menu is hidden by default
      mobileMenuOpen: false,
      isNavShrink: false,
    };
  },
  methods: {
    // Toggle the mobile menu
    toggleMobileMenu () {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    handleScroll () {
      // Adjust the scroll position threshold as needed
      this.isNavShrink = window.scrollY > 60;
    },
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<template>
  <nav id="nav">
    <div class="nav-content">
      <!-- Hamburger -->
      <button
        @click="toggleMobileMenu"
        class="hamburger"
        aria-label="toggle Navigation"
      >
        <span v-if="mobileMenuOpen">
          <!-- Close -->
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              transform="matrix(.70711 .70711 .70711 -.70711 0 0)"
              x="-436.76"
              y="629.28"
              width="882"
              height="150"
              stroke-width="0"
            />
            <rect
              transform="matrix(.70711 -.70711 -.70711 -.70711 0 0)"
              x="263.28"
              y="-79.243"
              width="882"
              height="150"
              stroke-width="0"
            />
          </svg>
        </span>
        <span v-if="!mobileMenuOpen">
          <svg
            width="20"
            height="15"
            version="1.1"
            viewBox="0 0 15 11.25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-4.5 -3)" fill="#fff" stroke-width="0">
              <rect x="4.5" y="3" width="15" height="2.25" />
              <rect x="4.5" y="12" width="15" height="2.25" />
              <rect x="4.5" y="7.5" width="15" height="2.25" />
            </g>
          </svg>
        </span>
      </button>

      <AppLogo />
    </div>
    <!-- DESKTOP MENU -->
    <!-- Hide below 1024px -->
    <div
      class="navlinks"
      :class="[
        $route.fullPath === '/' ? 'red' : 'blue',
        { shrink: isNavShrink },
      ]"
    >
      <NuxtLink to="/" title="Hysterectomies">Hysterectomies</NuxtLink>
      <NuxtLink to="girft" title="GIRFT">GIRFT</NuxtLink>
      <NuxtLink to="cost-model" title="Cost Model">Cost Model</NuxtLink>
      <NuxtLink to="glossary" title="glossary">Glossary</NuxtLink>
      <NuxtLink to="export-to-pdf" title="Tools">Export to PDF</NuxtLink>
    </div>
    <!-- MOBILE MENU -->
    <!-- Show below 1024px -->
    <div v-if="mobileMenuOpen" class="mobilenavlinks">
      <NuxtLink to="/" title="Hysterectomies">Hysterectomies</NuxtLink>
      <NuxtLink to="girft" title="GIRFT">GIRFT</NuxtLink>
      <NuxtLink to="cost-model" title="Cost Model">Cost Model</NuxtLink>
      <NuxtLink to="glossary" title="glossary">Glossary</NuxtLink>
      <NuxtLink to="export-to-pdf" title="Tools">Export to PDF</NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
nav#nav {
  background-color: $light-grey;
  width: 100%;
  div.nav-content {
    background-color: $primary-green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
}
div.navlinks {
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: $light-grey;
    width: 200px;
    height: 40px;
    text-decoration: none;
    font-size: 1rem;
    font-family: "Inter-Regular";
    color: black;
    text-align: center;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    border-right: 3px solid #d9d9d9;
    &:hover {
      background-color: lighten($primary-green, 10);
    }
    &.router-link-active {
      background-color: $secondary-green;
      color: white;
    }
  }
  &.shrink a {
    padding: 0.75rem 1rem 1rem;
  }
}

// MOBILE
// Hamburger
button.hamburger {
  display: block;
  height: 48px;
  background-color: transparent;
  border: 0;
  padding: 0 0.5rem;
  @media (min-width: 1024px) {
    display: none;
  }
}
div.mobilenavlinks {
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: none;
  }
  a {
    padding: 1rem 0.5rem;
    text-align: center;
    text-decoration: none;
    color: black;
    border-top: 1px solid black;
    &:hover {
      background-color: #e6e6e6;
    }
  }
}
</style>
