<template>
  <div>
    <input v-model="title" type="text" value="title" name="title" />
    <input
      v-model="description"
      type="text"
      value="description"
      name="description"
    />
    <v-btn elevation="2" v-on:click="agregar">agregar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    agregar() {
      this.$store.commit("addNotif", {
        id: this.$store.state.notifNumber + 1,
        title: this.title,
        description: this.description,
      });
    },
  },
};
</script>

<style scoped>
</style>