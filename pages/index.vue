<template>
  <h3 class="page-title-heading">Hysterectomies</h3>

  <UiHystTabs
    title1="Summary"
    title2="CCG Waiting Times"
    title3="Patient Pathway"
  >
    <template #tab1>
      <SummaryTab />
    </template>
    <template #tab2>
      <WaitingTimesTab />
    </template>
    <template #tab3>
      <PatientPathwayTab />
    </template>
  </UiHystTabs>

  <!--
  ORG
  <UiOrgSelect />
  -->
</template>
