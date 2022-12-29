<script>
export default {
  props: {
    title: String,
    value: [String, Number],
  },
};
</script>

<template>
  <div
    class="flex flex-col flex-1 shadow-md rounded-md p-2 border-b-4 border-b-primary"
  >
    <span class="text-gray-500 text-sm">{{ title }}</span>
    <span class="text-secondary font-bold">
      {{ value }}
    </span>
  </div>
</template>
