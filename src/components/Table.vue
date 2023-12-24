<template>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="text-[#5d596c] font-semibold">
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
  
  