<script lang="ts" setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  minHeight: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div v-if="loading" class="h-100" :style="{ minHeight: `${minHeight}px` }">
    <transition name="fade" mode="out-in" appear>
      <div class="loader">
        <i class="fa fa-fw fa-circle-notch fa-spin text-primary" />
      </div>
    </transition>
  </div>
  <slot v-else />
</template>
