<template>
  <div class="admissions grid sm:cols-2">
    <!-- x 1 charts -->
    <div class="graph-container">
      <h3>One</h3>
      <div class="chart-container height-400">
        <!-- chart -->
        <ChartsAdmissions />
      </div>
    </div>
    <!-- x 2 charts -->
    <div class="graph-container">
      <h3>Two</h3>
      <div class="chart-container height-200">
        <!-- chart -->
        <ChartsTypeOfInfection />
      </div>
      <h3>Three</h3>
      <div class="chart-container height-200">
        <!-- chart -->
        <ChartsAdmissions />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
div.admissions {
  .graph-container {
    min-width: 0;
    .chart-container {
      position: relative;
      width: 100%;
      background-color: #d5d5d5;
    }
  }
  .height-200 {
    height: 200px;
  }
  .height-400 {
    height: 400px;
  }
}
</style>
