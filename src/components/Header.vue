  <template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-system-bar color="deep-purple darken-3"></v-system-bar>

        <v-app-bar color="deep-purple accent-4" dark prominent>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>Notificaciones</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-bell</v-icon>
            {{ count }}
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :width="1000">
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item
                v-bind:key="notifItem.id"
                v-for="notifItem in $store.state.notifications"
              >
                <Notif :notifItem="notifItem"></Notif>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Notif from "./Notif.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Notif,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  props: ["notifItems"],

  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    count() {
      return this.$store.state.notifNumber;
    },
    ...mapGetters(["notifications"]),
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