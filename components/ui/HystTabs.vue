<script setup>
defineProps({
  title1: {
    type: String,
    required: false,
    default: "title 1 prop here",
  },
  title2: {
    type: String,
    required: false,
    default: "title 2 prop here",
  },
  title3: {
    type: String,
    required: false,
    default: "title 3 prop here",
  },
});

const activeTab = ref("tab1");
</script>

<template>
  <div class="tabs grid lg:cols-2">
    <div class="tab-controls lg:col-span-1">
      <div
        class="tab"
        :class="{ active: activeTab === 'tab1' }"
        @click="activeTab = 'tab1'"
      >
        {{ title1 }}
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'tab2' }"
        @click="activeTab = 'tab2'"
      >
        {{ title2 }}
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'tab3' }"
        @click="activeTab = 'tab3'"
      >
        {{ title3 }}
      </div>
    </div>
    <!--  HYST OPTIONS -->
    <UiHystOptions class="lg:col-span-1" />
    <!--  HYST OPTIONS -->
    <div v-if="activeTab === 'tab1'" class="tab-content lg:col-span-2">
      <slot name="tab1"></slot>
    </div>
    <div v-if="activeTab === 'tab2'" class="tab-content lg:col-span-2">
      <slot name="tab2"></slot>
    </div>
    <div v-if="activeTab === 'tab3'" class="tab-content lg:col-span-2">
      <slot name="tab3"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.tabs {
  width: 100%;
  @media (min-width: 1024px) {
    margin-top: 0.8rem;
  }
  .tab-controls {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  background-color: $medium-grey;
  color: white;
  border-radius: 0.313rem; // 5px
  margin-bottom: 0.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    max-width: 210px;
  }
  @media (min-width: 1024px) {
    margin-right: 0.5rem;
  }
}
.tab.active {
  background-color: $primary-green;
}
.tab-content {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
