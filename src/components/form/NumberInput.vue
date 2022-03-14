<template>
  <input
    class="form-control"
    type="number"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: Number,
  },
};
</script>
