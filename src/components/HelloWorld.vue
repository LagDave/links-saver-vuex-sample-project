<template>
  <div class="hello">
    <div class="left">
      <h1>{{title}}</h1>
      <form action @submit.prevent="addLink">
        <input type="text" placeholder="Add a Link" v-model="newLink" class="link-" />
      </form>
      <ul>
        <li v-for="link in links" v-bind:key="link.id">
          {{link.name}}
          <button @click="removeTheLink(link.id -1)">Delete</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import Stats from "./StatsComponent";

export default {
  name: "HelloWorld",
  data() {
    return {
      newLink: ""
    };
  },
  components: {
    Stats
  },
  computed: {
    ...mapGetters(["lastId"]),
    ...mapState(["title", "links"])
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink() {
      let newLinkObject = { name: this.newLink, id: this.lastId };
      this.ADD_LINK(newLinkObject);
      this.newLink = "";
    },
    removeTheLink(linkId) {
      console.log(linkId);
      this.removeLink(linkId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<style > html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.left,
.right {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}
</style>
</style>
