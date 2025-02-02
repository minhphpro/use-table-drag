<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  helperText: {
    type: String,
    default: "",
  },
  messageError: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
  },
});

const emit = defineEmits(["update:modelValue"]);
const localValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);

function updateValue(event: any) {
  localValue.value = event?.target?.value;
  emit("update:modelValue", localValue.value);
}

function increment() {
  localValue.value = localValue.value + 1;
  emit("update:modelValue", localValue.value);
}

function decrement() {
  const newValue = localValue.value - 1;
  if (newValue >= 0) {
    localValue.value = newValue;
    emit("update:modelValue", localValue.value);
  }
}

function onBlur() {
  if (!localValue.value) {
    localValue.value = 0;
    emit("update:modelValue", localValue.value);
  }
}
</script>

<template>
  <div
    class="input-wrapper d-flex align-items-center ps-3 rounded"
    :style="{ width: `${width}px` }"
  >
    <input
      v-model="localValue"
      type="number"
      @input="updateValue"
      @blur="onBlur"
    />
    <div class="controls d-flex flex-column align-items-center h-100">
      <div class="control up" @click.stop="increment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
          />
        </svg>
      </div>
      <div class="control" @click.stop="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          />
        </svg>
      </div>
    </div>
  </div>
  <i v-if="helperText" class="fs-12px user-select-none">
    {{ helperText }}
  </i>
  <div v-if="messageError" class="text-danger fw-medium mt-2 fs-sm">
    {{ messageError }}
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  height: 38px;
  border: 1px solid #d6dddd;
  &:focus-within,
  &:hover {
    border-color: var(--bs-primary);
  }

  .controls {
    width: 21px;
    border-left: 1px solid #d6dddd;
    .control {
      width: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      color: #6c757d;
      svg {
        width: 0.625rem;
        height: 0.625rem;
      }
      &:hover {
        color: var(--bs-primary);
      }
      &.up {
        border-bottom: 1px solid #d6dddd;
      }
    }
  }

  input[type="number"] {
    text-align: left;
    padding-right: 40px;
    width: 100%;
    border: none;
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
