<template>
  <section role="contentinfo" aria-label="CCG Waiting Times">
    <h3 class="section-title" id="waiting-times">CCG Waiting Times</h3>

    <div class="grid lg:cols-2 gap-1">
      <div>
        <h3 class="chart-title">
          Top 5 CCG's
          <span>April 2018 to March 2019</span>
        </h3>
        <TopFiveTable />
      </div>

      <div class="chart-container">
        <ChartsAverageWaitingTimes />
      </div>
    </div>
  </section>
</template>
