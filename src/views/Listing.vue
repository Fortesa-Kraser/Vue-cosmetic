<template>
  <section>
    <div class="container">
      <div class="row">
        <Card
          v-for="entry in vueCosmeticList"
          :key="entry._id"
          :vueCosmetic="entry"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import apiRequest from "../utility/apiRequest";
import { mapGetters } from "vuex";
export default {
  components: {
    Card,
  },
  created() {
    this.fetchVueCosmetic();
  },
  methods: {
    async fetchvueCosmetic() {
      const result = await apiRequest.getVueCosmeticList();
      this.$store.dispatch("fetchvueCosmetics", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user",
      vueCosmeticList: "vueCosmeticsList",
    }),
  },
};
</script>
