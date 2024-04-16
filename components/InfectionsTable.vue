<script setup>
//
</script>
<template>
  <table cellpadding="0" cellspacing="2" class="infections-table">
    <thead>
      <tr>
        <th>Open</th>
        <th>Readmissions</th>
        <th>Lap</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>00</td>
        <td>Trust Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>00,000</td>
        <td>Trust Cost (£)</td>
        <td>00</td>
      </tr>
      <tr>
        <td>00%</td>
        <td>Trust %</td>
        <td>00%</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td>0.0%</td>
        <td>Top 25 Trust %</td>
        <td>0.0%</td>
      </tr>
    </tfoot>
  </table>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
table.infections-table {
  width: 80%;
  font-size: 0.875rem; // 14px
  border: 0px solid white;
  margin: 0 auto;
  th,
  td {
    padding: 0.715rem 0.5rem;
    background-color: $light-grey;
  }
  thead {
    th {
      background-color: $medium-grey;
      color: white;
      width: 33%;
      &:first-child {
        background-color: $primary-green;
      }
      &:last-child {
        background-color: $primary-purple;
      }
    }
  }
  tbody {
    td {
      text-align: center;
    }
  }
  tfoot {
    td {
      text-align: center;
    }
  }
}
</style>
