<template>
  <section role="contentinfo" aria-label="Patient Pathway">
    <h3 class="section-title" id="patient-pathway">Patient Pathway</h3>

    <div class="grid sm:cols-2 lg:cols-3 xl:cols-4">
      <!--  -->
      <PathwayStatCard
        title="Procedures"
        subtitle=""
        open="86"
        difference="31"
        lap="15"
      />
      <PathwayStatCard
        title="Average Age"
        subtitle=""
        open="53"
        difference="1"
        lap="51"
      />
      <PathwayStatCard
        title="Bed Days"
        subtitle=""
        open="277"
        difference="176"
        lap="101"
      />
      <PathwayStatCard
        title="Mean LoS"
        subtitle=""
        open="3.0"
        difference="1.2"
        lap="1.8"
      />
      <PathwayStatCard
        title="Mean PreOp Los"
        subtitle=""
        open="0"
        difference="0"
        lap="0"
      />
      <PathwayStatCard
        title="Mean PostOp Los"
        subtitle=""
        open="3.0"
        difference="1.2"
        lap="1.8"
      />
      <PathwayStatCard
        title="Excess Bed Days"
        subtitle=""
        open="15"
        difference="14"
        lap="1"
      />
      <PathwayStatCard
        title="% Readmissions"
        subtitle="1-28 days following hysterectomy"
        open="10.5%"
        difference="12.7%"
        lap="1"
      />
      <PathwayStatCard
        title="% Complications"
        subtitle="0-28 days following hysterectomy"
        open="12.1%	"
        difference="8.5%"
        lap="3.6%"
      />
      <PathwayStatCard
        title="% Infections"
        subtitle="0-28 days following hysterectomy"
        open="2.2%"
        difference="0.4%"
        lap="1.8%"
      />
      <PathwayStatCard
        title="Average OP Appts Pre"
        subtitle="Gynaecology Speciality Only within 6 months"
        open="3.0"
        difference="-0.1"
        lap="3.2%"
      />
      <PathwayStatCard
        title="Average OP Appts Post"
        subtitle="Gynaecology Speciality Only within 6 months"
        open="1.3"
        difference="-0.2"
        lap="1.4"
      />
      <PathwayStatCard
        title="Critical Care Costs"
        subtitle="During hysterectomy procedure at 1,500 per day"
        open="$3,000"
        difference="$3,000"
        lap="$0"
      />
    </div>
  </section>
</template>
