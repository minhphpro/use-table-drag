<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
});
const uuid = `switch-${
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15)
}`;
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="uuid"
      :checked="modelValue"
      class="form-check-input cursor-pointer"
      type="checkbox"
      role="switch"
    />
    <label class="form-check-label user-select-none" :for="uuid">{{ label }}</label>
  </div>
</template>