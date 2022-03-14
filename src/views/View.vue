<template>
  <section>
    <div v-if="this.vueCosmetic" class="row justify-content-center">
      <div class="col-5 col-md-8 col-lg-8">
        <div class="flex">
          <h1>
            {{ this.vueCosmetic.type }}
          </h1>

          <p>Square Meters: {{ this.vueCosmetic.squareMeters }}</p>

          <p>Price: {{ this.vueCosmetic.price }}</p>
        </div>
        <Dropzone
          :vueCosmeticId="this.$route.params.id"
          :initialFiles="realEstate.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import Dropzone from "@/components/form/Dropzone";

export default {
  components: {
    Dropzone,
  },
  created() {
    this.fetchVueCosmetic();
  },
  data() {
    return {
      vueCosmetic: null,
    };
  },
  methods: {
    async fetchvueCosmetic() {
      this.realEstate = await apiRequest.getVueCosmetic(this.$route.params.id);
    },
  },
};
</script>
