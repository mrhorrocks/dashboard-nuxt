<template>
  <h3 class="page-title-heading">Hysterectomies</h3>

  <!-- <UiHystTabs
    title1="Summary"
    title2="CCG Waiting Times"
    title3="Patient Pathway"
  >
    <template #tab1>
      <SummaryContent />
    </template>
    <template #tab2>
      <WaitingTimesContent />
    </template>
    <template #tab3>
      <PatientPathwayContent />
    </template>
  </UiHystTabs> -->

  <div class="grid lg:cols-3 hysterectomies-nav">
    <div class="hysterectomies-nav-buttons lg:col-span-2">
      <UiHystButton text="Summary" />
      <UiHystButton text="CCG Waiting Times" />
      <UiHystButton text="Patient Pathway" />
    </div>
    <div class="lg:col-span-1">
      <UiHystOptions class="lg:col-span-1" />
    </div>
    <div class="lg:col-span-3">
      <SummaryContent />
    </div>
    <!-- <div class="lg:col-span-3">
      <WaitingTimesContent />
    </div>
    <div class="lg:col-span-3">
      <PatientPathwayContent />
    </div> -->
  </div>

  <!--
  ORG
  <UiOrgSelect />
  -->
</template>

<style lang="scss">
.hysterectomies-nav {
  @media (min-width: 1024px) {
    margin-top: 0.7rem;
  }
  .hysterectomies-nav-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      flex-direction: row;
      min-width: 210px;
    }
    @media (min-width: 1024px) {
      justify-content: flex-start;
      min-width: 210px;
    }
  }
}
</style>
