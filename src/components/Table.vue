<template>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(header, colIndex) in headers" :key="colIndex">
            {{ row[header] }}
          </td>
        </tr>
      </tbody>
    </table>
</template>
  
<script>
  export default {
    props: {
      headers: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    }
  };
</script>
  
<style>
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
</style>
  