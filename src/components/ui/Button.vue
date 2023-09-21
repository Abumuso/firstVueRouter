<template>
  <div>
    <button :class="props.title == 'save' ? 'btn btn-success' : 'btn btn-info'">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
