var Mixins = {

    agregar() {
        const newNotif = {
            id: this.$store.state.notifNumber + 1,
            title: this.title,
            description: this.date,
        };
        this.$store.commit("addNotif", newNotif);
    },

}
