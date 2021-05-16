        <template>
  <div>
    <Header></Header>
    <Add></Add>
  </div>
</template>

  <script>
import Header from "./components/Header";
import Add from "./components/Add.vue";

export default {
  name: "App",

  components: {
    Header,
    Add,
  },

  data: () => ({}),
};
</script>
