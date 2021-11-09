<template>
  <ul>
    <li v-for="user in users"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
  </ul>
</template>

<script>
export default {
  computed: {
    users: function() {
      return this.$store.state.users
    }
  }
}
</script>