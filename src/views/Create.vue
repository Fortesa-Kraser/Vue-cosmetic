<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <form @submit.prevent="createVueCosmetic">
          <div class="form-group">
            <Dropdown
              v-model="form.type"
              :options="[
                { label: 'Apartment', value: 'apartment' },
                { label: 'Flat', value: 'flat' },
                { label: 'House', value: 'House' },
              ]"
            />
          </div>
          <div class="form-group">
            <NumberInput v-model="form.squareMeters" />
          </div>

          <div class="form-group">
            <NumberInput v-model="form.price" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary" type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../utility/apiRequest";
import Dropdown from "@/components/form/Dropdown.vue";
import NumberInput from "@/components/form/NumberInput.vue";

export default {
  components: {
    Dropdown,
    NumberInput,
  },
  data() {
    return {
      form: {
        type: "flat",
        squareMeters: 0,
        price: 0,
      },
      error: null,
    };
  },
  methods: {
    async createVueCosmetic() {
      //   const validationResult = vueCosmeticSchema.validate(this.form);
      //   if (validationResult.error) {
      //       this.error = error;
      //       return;
      //   }

      const newVueCosmetic = await apiRequest.createVueCosmetic({ ...this.form });
      this.$router.push({ name: "View", params: { id: newVueCosmetic._id } });
      // this.$router.push(`/view/${newVueCosmetic._id}`);
    },
  },
};
</script>
