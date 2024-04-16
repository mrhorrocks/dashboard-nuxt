<template>
  <section role="contentinfo" aria-label="Summary">
    <h2 class="section-title" id="summary">Summary</h2>

    <div class="grid lg:cols-2 gap-1">
      <div class="lg:col-span-1 chart-container">
        <ChartsRatesLapOpen />
      </div>
      <div class="lg:col-span-1">
        <h3 class="chart-title">
          Hysterectomies
          <span>April 2018 to March 2019</span>
        </h3>
        <HysterectomiesTable />
      </div>

      <!--  -->
      <div class="lg:col-span-1 grid cols-2 gap-1">
        <div class="col-span-2">
          <h3 class="chart-title">
            Complications & Infections
            <span>0 - 28 days post procedure</span>
          </h3>
        </div>

        <div class="lg:col-span-1 chart-container">
          <div>
            <ChartsInfectionsOpen />
          </div>
        </div>

        <div class="lg:col-span-1 chart-container">
          <div>
            <ChartsInfectionsLap />
          </div>
        </div>
        <div class="col-span-2">
          <InfectionsTable />
        </div>
      </div>

      <!--  -->

      <div class="lg:col-span-1 chart-container">
        <ChartsAverageLengthStayOpen />
        <ChartsAverageLengthStayLaparoscopic />
      </div>
    </div>

    <!-- <div class="grid xl:cols-2 gap-2">
      <div class="grid lg:cols-2 gap-2">
        <div class="lg:col-span-2 chart-container">
          <ChartsAdmissions />
        </div>
        <div class="lg:col-span-2">
          <h3 class="chart-title">
            Hysterectomies
            <span>April 2018 to March 2019</span>
          </h3>
          <HysterectomiesTable />
        </div>
        <div class="lg:col-span-2">
          <HysterectomiesStatBanner />
        </div>
      </div>
      <div class="grid lg:cols-2 gap-2">
        <div class="lg:col-span-1">Complications & Infections Pies</div>
        <div class="lg:col-span-1">
          Average length of Stay Benchmarked Charts
        </div>
      </div>
    </div> -->
  </section>
</template>
