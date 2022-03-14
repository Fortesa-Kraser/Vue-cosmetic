<template>
  <select
    class="form-control"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <option v-for="entry in options" :key="entry.value" :value="entry.value">
      {{ entry.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: String,
    options: Array, // { label: 'Apartment', value: 2 }
  },
};
</script>
