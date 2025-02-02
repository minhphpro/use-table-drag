<script lang="ts" setup>
import { IColumn, IRow } from ".";

defineProps({
  data: {
    type: Array as PropType<IRow[]>,
    required: true,
  },
  columns: {
    type: Array as PropType<IColumn[]>,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: true,
  },
  rowClassName: {
    type: String,
    default: undefined,
  },
});
const emits = defineEmits(["rowClick"]);

</script>

<template>
  <div class="position-relative">
    <BaseLoader :loading="isLoading" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            :class="column?.headerClassName"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!isLoading && data.length === 0" class="empty-row">
          <td :colspan="columns.length" class="text-center">
            Không có dữ liệu
          </td>
        </tr>
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          :class="rowClassName"
          @click="$emit('rowClick', row)"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            v-overflow-tooltip="row[column.key]"
            :style="{
              minWidth: column.minWidth ? `${column.minWidth}px` : 'auto',
              maxWidth: column.maxWidth ? `${column.maxWidth}px` : 'auto',
              width: column.width ? `${column.width}px` : 'auto',
            }"
            class="text-truncate"
            :class="column?.className"
          >
            <slot :name="column.key" :row="row">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  tbody {
    .empty-row {
      height: 300px;
      vertical-align: middle;
    }
  }
}
</style>
