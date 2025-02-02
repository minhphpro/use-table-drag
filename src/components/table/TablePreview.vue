<template>
  <BaseTable ref="tableRef" :data="dataTable" :columns="tableColumns" :isLoading="isLoading">
    <template #property="{ row }">
      {{ row.property.color }}
    </template>
    
    <template #action>
      <i class="fa-solid fa-bars drag-handle cursor-move"></i>
    </template>
  </BaseTable>
  <pre class="json-preview">{{ JSON.stringify(dataTable, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { useTableDrag } from "@/hooks/useTableDrag";
import { IColumn } from ".";
const isLoading = ref(false);
const draggable = ref(true)
const tableRef = ref()

const dataTable = ref([
  {
    id: 1,
    name: "Áo thun",
    price: 100000,
    quantity: 10,
    property: { color: "red" },
  },
  {
    id: 2,
    name: "Quần jean",
    price: 200000,
    quantity: 20,
    property: { color: "blue" },
  },
  {
    id: 3,
    name: "Áo sơ mi",
    price: 300000,
    quantity: 30,
    property: { color: "white" },
  },
]);

const tableColumns: IColumn[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Tên sản phẩm" },
  { key: "price", label: "Giá" },
  { key: "quantity", label: "Số lượng" },
  { key: "property", label: "Màu sắc" },
  { key: "action", label: "Hành động", className: "text-center", headerClassName: "text-center" },
];

useTableDrag({
  draggable: computed(() => draggable.value),
  tableRef,
  data: dataTable,
  onRowDrag: computed(() => {
    return (_rows: Record<string, any>[]) => {
      const rowIds = dataTable.value.map(row => row.id)
      console.log(rowIds)
    }
  }),
})
</script>

<style scoped>
.cursor-move {
  cursor: move;
}

.json-preview {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
}
</style>
