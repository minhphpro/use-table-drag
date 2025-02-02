import { watchOnce } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import { useDraggable } from "vue-draggable-plus";
import type { ComputedRef, Ref } from "vue";

interface FullQueryState {
  data: Ref<Record<string, any>[]>;
}

interface DataTableSchema {
  onRowDrag?: (rows: Record<string, any>[]) => void;
}

export function useTableDrag(params: {
  draggable: ComputedRef<boolean>;
  tableRef: Ref<InstanceType<any> | undefined>;
  data: FullQueryState["data"];
  onRowDrag: ComputedRef<DataTableSchema["onRowDrag"]>;
}) {
  const tableEl = computed(() => params.tableRef?.value?.$el as HTMLElement);
  const tableBodyRef = ref<HTMLElement | undefined>(undefined);

  const { start } = useDraggable(tableBodyRef, params.data, {
    immediate: false,
    animation: 150,
    handle: ".drag-handle",
    onEnd: (event) => {
      const { oldIndex, newIndex } = event;
      const start = Math.min(oldIndex!, newIndex!);
      const end = Math.max(oldIndex!, newIndex!) - start + 1;
      const changedRows = [...params.data.value].splice(start, end);
      params.onRowDrag.value?.(unref([...changedRows]));
    },
  });

  onMounted(async () => {
    while (!tableBodyRef.value) {
      tableBodyRef.value = tableEl.value?.querySelector("tbody") || undefined;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  });

  watchOnce(
    () => tableBodyRef.value,
    (el) => {
      if (el && params.draggable.value) start();
    }
  );
}
