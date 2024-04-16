<script setup>
//
</script>
<template>
  <table cellpadding="0" cellspacing="2">
    <thead>
      <tr>
        <th>Type</th>
        <th>Sum</th>
        <th>Avg</th>
        <th>Avg £</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Benign<span>Laporoscopic</span></td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
      <tr>
        <td><span></span><span>Open</span></td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
      <tr>
        <td><span></span><span>Open</span></td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
      <tr>
        <td>Non Benign<span>Laporoscopic</span></td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total Hysterectomies</td>
        <td>000</td>
        <td>00</td>
        <td>£0,000</td>
      </tr>
    </tfoot>
  </table>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
table {
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
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
    td {
      text-align: center;
    }
  }
  tfoot {
    td {
      text-align: center;
      background-color: $primary-purple;
      color: white;
    }
  }
}
</style>
