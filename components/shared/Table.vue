<script setup>
  const props = defineProps({
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  });

  defineEmits(['modal:edit-row']);
</script>

<template>
  <table class="o-table">
    <thead class="o-table__head">
      <tr class="o-table__row">
        <th
          v-for="column in columns"
          :key="column.name"
          class="o-table__cell"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody class="o-table__body">
      <tr
        v-for="row in data"
        :key="row.id"
        class="o-table__row"
      >
        <td
          v-for="column in columns"
          :key="column.name"
          class="o-table__cell"
        >
          {{ row[column.name] }}
        </td>
        <td @click="$emit('modal:edit-row', row)">
          Edit
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'o-table',
  };
</script>

<style lang="scss" scoped>
  .o-table {
    width: 100%;
    border-collapse: collapse;

    .o-table__cell {
        height: 40px;
        padding: 0 24px;
        text-align: left;
    }

    &__head {
      .o-table__cell {
        font-weight: 500;
      }
    }

    &__body {
      .o-table__row:nth-child(even) {
        background-color: #EEEEEE;
      }
    }
  }
</style>
