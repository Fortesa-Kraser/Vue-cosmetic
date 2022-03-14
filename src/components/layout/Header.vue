<template>
  <nav class="navbar navbar-light bg-light">
    <div class="d-flex flex-row">
      <a class="navbar-brand">Vue Cosmetic App</a>
      <ul class="navbar-nav flex-row">
        <li class="nav-item mr-2">
          <router-link class="nav-link" :to="{ name: 'Listing' }"
            >Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Create' }"
            >Add new
          </router-link>
        </li>
      </ul>
    </div>

    <div>
      <ul
        v-if="user && user.data"
        class="navbar-nav d-flex flex-row align-items-center"
      >
        <div class="mr-4">
          <p class="mb-0">Hello {{ user.data.email }}!</p>
        </div>
        <li class="nav-item dropdown">
          <img
            class="rounded-circle dropdown-toggle"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            style="width: 30px; height: 30px"
            alt="user-avatar"
          />
          <ul class="dropdown-menu position-absolute dropdown-menu-right">
            <li>
              <a class="dropdown-item disabled">Profile</a>
            </li>
            <li>
              <a class="dropdown-item disabled">Settings</a>
            </li>
            <li>
              <a class="dropdown-item">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style>
.dropdown-menu {
  display: none;
}

.nav-item:hover .dropdown-menu {
  display: block;
}
</style>
