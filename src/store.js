import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    links: [
      { name: 'http://google.com', id: 1 },
      { name: 'http://coursetro.com', id: 2 },
      { name: 'http://youtube.com', id: 3 }
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    },
    lastId: state => {
      return state.links[state.links.length - 1].id;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, linkId) => {
      state.links.splice(linkId, 1)
    }
  },
  actions: {
    removeLink: (context, linkId) => {
      context.commit("REMOVE_LINK", linkId)
    }
  }
})
