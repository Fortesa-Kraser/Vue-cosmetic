<template>
  <div class="col-lg-4 mt-4 col-md-6 col-sm-12">
    <div class="card">
      <img
        v-if="src"
        :src="src"
        class="card-img-top"
        style="max-height: 150px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ vueCosmetic.type }}</h5>
        <p class="card-text">Square meters: {{ vueCosmetic.squareMeters }}</p>
        <router-link
          class="btn btn-primary"
          :to="{ name: 'View', params: { id: vueCosmetic._id } }"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vueCosmetic: Object,
  },
  computed: {
    src() {
      const filename = this.vueCosmetic.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
};
</script>
