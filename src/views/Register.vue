<template>

    <form @submit.prevent="createUser">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="form.email">
        </div>

        <div>
            <label for="password">Password: </label>
            <input type="password" name="password" v-model="form.password">
        </div>

        <div v-if="this.error">Error ocurred: {{ this.error }}</div>
        <button type="submit">Register</button>
    </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async createUser() {
        const auth = getAuth();
        try {
        await createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
        } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>
