<script setup>
//
</script>
<template>
  <table cellpadding="0" cellspacing="2" class="top-five-table">
    <thead>
      <tr>
        <th>CCG Activity</th>
        <th>This Trust</th>
        <th>All Trust</th>
        <th>% This Trust</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Airedale NHS Foundation Trust</td>
        <td>000 (00 %)</td>
        <td>000</td>
        <td>00.0%</td>
      </tr>
      <tr>
        <td>Ashford and St Peter`s Hospitals NHS Foundation Trust</td>
        <td>000 (00 %)</td>
        <td>000</td>
        <td>00.0%</td>
      </tr>
      <tr>
        <td>Barking, Havering and Redbridge University Hospitals NHS Trust</td>
        <td>000 (00 %)</td>
        <td>000</td>
        <td>00.0%</td>
      </tr>
      <tr>
        <td>Barnsley Hospital NHS Foundation Trust</td>
        <td>000 (00 %)</td>
        <td>000</td>
        <td>00.0%</td>
      </tr>
      <tr>
        <td>Barts Health NHS Trust</td>
        <td>000 (00 %)</td>
        <td>000</td>
        <td>00.0%</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
table.top-five-table {
  width: 100%;
  font-size: 0.875rem; // 14px
  border: 0px solid white;
  th,
  td {
    padding: 0.715rem 0.5rem;
    background-color: $light-grey;
    &:first-child {
      text-align: left;
    }
  }
  thead {
    th {
      background-color: $primary-green;
      color: white;
    }
  }
  tbody {
    td:first-child {
      font-weight: bold;
    }
    td {
      text-align: center;
    }
  }
}
</style>
