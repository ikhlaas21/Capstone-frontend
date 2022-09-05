import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    listings: null,
    listing: null,
    user: null
  },
  getters: {},
  mutations: {
    stateListing(state, listing) {
      state.listings = listing
    },
    stateSingleListing(state, listing) {
      state.listing = listing
    },
    stateUser(state, user) {
      state.user = user
    }
  },
  actions: {
    fetchListings: async (context) => {
      await fetch('https://bizniz-api.herokuapp.com/listings')
        .then(result => result.json())
        .then((data) => context.commit('stateListing', data.results))
    },


    fetchSingleListing: async (context, id) => {
      await fetch(`https://bizniz-api.herokuapp.com/listings/${id}`)
        .then(result => result.json())
        .then((data) => context.commit('stateSingleListing', data.results))
    },


    login(context, payload) {
      console.log(payload);
      fetch('https://bizniz-api.herokuapp.com/users', {
          method: 'PATCH',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          context.commit("stateUser", data.user)
          context.dispatch("checkProfile")
          console.log("signed in")
        });
    },


    checkProfile(context){
      fetch(`https://bizniz-api.herokuapp.com/listings/userlisting/${context.state.user.id}`)
        .then(result => result.json())
        .then((data) => console.log(data.results))
    },



    register(context, payload) {
      console.log(payload);
      fetch('https://bizniz-api.herokuapp.com/users', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          context.commit("stateUser", data.results)
        
          console.log("Registered successfully")
        });
    }
  },
  modules: {}
})