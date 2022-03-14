<template>
  <footer class="text-center bg-light text-muted fixed-bottom">
    <div class="p-4">© {{ currentYear }} Copyright: Vue Cosmetic App</div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
body {
  padding-bottom: 80px;
}
</style>
