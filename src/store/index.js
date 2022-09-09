import swal from 'sweetalert'
import Swal from 'sweetalert2'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    listings: null,
    listing: null,
    user: null,
    users: null,
    existingUser: false
  },
  getters: {},
  mutations: {
    stateListing(state, listings) {
      state.listings = listings
    },
    stateSingleListing(state, listing) {
      state.listing = listing
    },
    stateUser(state, user) {
      state.user = user
    },
    stateUsers(state,users) {
      state.users = users
    },
    setExistingUser(state,user){
      state.existingUser = user
    }

  },
  actions: {
    


    fetchListings: async (context) => {
      await fetch('https://bizniz-api.herokuapp.com/listings')
        .then(result => result.json())
        .then((data) => context.commit('stateListing', data.results))
    },


    fetchSingleListing: async (context, payload) => {
      fetch('https://bizniz-api.herokuapp.com/listings/' + payload)
        .then(result => result.json())
        .then((data) => {
          if(data.results.length > 0 ){
            context.commit('setExistingUser', true)
            context.commit('stateSingleListing', data.results[0])
          }else{
            context.commit('stateSingleListing', data.results[0])
          }
        })
    },

    fetchUsers: async (context) => {
      await fetch('https://bizniz-api.herokuapp.com/users/')
      .then(result => result.json())
      .then((data) => context.commit('stateUsers', data))
    },


    fetchUser: async (context, payload) => {
      payload = context.state.user.id
      fetch('https://bizniz-api.herokuapp.com/users/' + payload)
        .then(result => result.json())
        .then((data) => context.commit('stateUser', data.results[0]))
    },

    updateListing(context, payload) {
      console.log(payload);
      fetch(`https://bizniz-api.herokuapp.com/listings/${context.state.user.id}`,{
        method: 'PUT',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == "Listing Added"){
          swal({
            icon:"success",
            title:"Updated Successfully",
            text:"You may update this at a later stage",
            buttons:"OK"
          })
          console.log(data.token)
              console.log(data.user);
              context.dispatch("checkProfile")
              console.log("Update")
      }})
    },


    deleteUser(context, payload){
      console.log(payload);
      fetch(`https://bizniz-api.herokuapp.com/users/${context.state.user.id}`,{
        method: 'DELETE',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == "Deleted the user was"){
          swal({
            icon:"success",
            title:"Deleted Successfully",
            text:"Thanks",
            buttons:"OK"
          })
          console.log(data.token)
              console.log(data.user);
              // context.dispatch("checkProfile")
              console.log("Delete")
      }})

    },


    createListing(context, payload) {
      console.log(payload);
      fetch(`https://bizniz-api.herokuapp.com/listings/listings`,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == "Listing Created"){
          swal({
            icon:"success",
            title:"Created Successfully",
            text:"You may update this at a later stage",
            buttons:"OK"
          })
          console.log(data.token)
              console.log(data.user);
              context.dispatch("checkProfile")
              console.log("Created")
      }})
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
          if(data.msg == "not found email was"){
            swal({
              icon:"error",
              title:"Oops, incorrect email",
              text:"Are you dumb fam?",
              buttons:"Yes"
            })
          }else{
            if(data.msg == "Incorrect your password was"){
              swal({
                icon:"error",
                title:"Oops, incorrect password",
                text:"Are you dumb fam?",
                buttons:"Yes"

              })
            }else{
              swal({
                icon:"success",
                title:`Thanks  ${data.user.fullname} for joining CodeBricks!`
              })
              console.log(data.token)
              console.log(data.user);
              context.commit("stateUser", data.user)
              context.dispatch('fetchSingleListing', data.user.id)
              console.log("signed in")
            }
          }
   
        });
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
          if(data.msg == "Email already in use"){
            swal({
              icon:"error",
              title:"Uhm this is awkward",
              text:"Email already in use",
              buttons:"OK"

            });
          }else{
            swal({
              icon:"success",
              title:"Registered",
              buttons:"OK"
            });
            console.log(data)
            // context.commit("stateUser", data.results)
            console.log("Registered successfully")
          }
      
        });
    }
  },
  modules: {}
})