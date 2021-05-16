<template>
  <div>
    <h3>{{ notifItem.title }}</h3>
    <p>{{ notifItem.description }}</p>
    <v-btn icon color="primary" v-on:click="store.commit(delNotif)">
      <v-icon color="primary">mdi-trash-can-outline</v-icon>
    </v-btn>
  </div>
</template>     

<script>
export default {
  props: ["notifItem"],
};
</script>

<style scoped>
</style>