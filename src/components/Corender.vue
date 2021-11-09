<template>
<div>
  <ul>
    <li v-for="user in users"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
  </ul>
    <div class="calendar">
    <div  class="c-week" v-for="week in weeks" :key="week">
      {{week}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    users: function() {
      return this.$store.state.users
    },
       weeks: function() {
      return this.$store.atate.weeks
    }

  }
}
</script>