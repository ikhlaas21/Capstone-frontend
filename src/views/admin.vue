<template>
  <div class="container-fluid">
    <h1>UserListing Table</h1>
    <table v-if="listings" class="table">
  <tr>
    <th class="table__heading">ID</th>
    <th class="table__heading">listingName</th>
    <th class="table__heading">listingUrl</th>
    <th class="table__heading">listingDescription</th>
    <th class="table__heading">githubUrl</th>
    <th class="table__heading">linkedinUrl</th>
    <th class="table__heading">projectLink</th>
    <th class="table__heading">personDescription</th>
    <th class="table__heading">SpecialtyOption</th>
    <th class="table__heading">Manage</th>
  </tr>
  <tr v-for="list in listings" :key="list.id" class="table__row">
    <td class="table__content" data-heading="ID">{{list.id}}</td>
    <td class="table__content" data-heading="listingName">{{list.listingName}}</td>
    <td class="table__content" data-heading="listingUrl"><img :src="list.listingUrl" alt=""></td>
    <td class="table__content" data-heading="listingDescription">{{list.listingDescription}}</td>
    <td class="table__content" data-heading="githubUrl">{{list.githubUrl}}</td>
    <td class="table__content" data-heading="linkedinUrl">{{list.linkedinUrl}}</td>
    <td class="table__content" data-heading="projectLink">{{list.projectLink}}</td>
    <td class="table__content" data-heading="personDescription">{{list.personDescription}}</td>
    <td class="table__content" data-heading="SpecialtyOption">{{list.SpecialtyOption}}</td>
    <td class="table__content" data-heading="manage"><i class="bi bi-trash-fill"></i>Delete</td>
  </tr>
    
</table>
<br>
<h1>User Table</h1>
<table v-if="users" class="table">
  <tr>
    <th class="table__heading">ID</th>
    <th class="table__heading">fullname</th>
    <th class="table__heading">email</th>
    <th class="table__heading">userpassword</th>
    <th class="table__heading">usertype</th>
    <th class="table__heading">Manage</th>
   
  </tr>
  <tr v-for="user in users" :key="user.id" class="table__row">
    <td class="table__content" data-heading="ID">{{user.id}}</td>
    <td class="table__content" data-heading="fullname">{{user.fullname}}</td>
    <td class="table__content" data-heading="email">{{user.email}}</td>
    <td class="table__content" data-heading="userpassword">{{user.userpassword}}</td>
    <td class="table__content" data-heading="usertype">{{user.usertype}}</td>
    <td class="table__content" data-heading="manage"><i class="bi bi-trash-fill">Delete</i></td>
   </tr>
    
</table>
<br>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('fetchListings'),
        this.$store.dispatch('fetchUsers')
       
    },
    computed: {
        listings() {
            return this.$store.state.listings
        },
        users() {
            return this.$store.state.users
        }
    }
}
</script>

<style scoped>


td, th { padding: 8px; padding: .5rem;
}

th {
  text-align: left;
  font-weight: 300;
  font-size: 25px;
  font-size: 1.20rem;
  border: 1px solid rgb(155, 41, 41);
  background-color: rgba(0, 128, 128, 0.351);
}

td {
   font-family: 'Avenir Next', 'Segoe UI', 'Lucida Grande', sans-serif; 
   border: 1px solid rgb(155, 41, 41);
}

.table {
  width: 800px;
  padding: 15px;
  padding: 1.1rem;
  border: solid 4px teal;
  margin: auto;
  padding-bottom: 20px;
  
}

.table__heading { border-bottom: 2px solid teal; }
 @media (max-width: 32rem) {
 .table__heading {
display: none;
}
 .table__content {
 display: block;
 padding: .5rem 0;
}
 .table__row {
 margin: .25rem 1rem;
 padding: .5rem 0;
 display: block;
 border-bottom: 2px solid teal;
}
 .table__content:before {
 content: attr(data-heading);
 display: inline-block;
 width: 5rem;
 margin-right: .5rem;
 color: #999;
 font-size: .75rem;
 font-weight: 700;
 font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
 text-transform: uppercase;
 letter-spacing: 2px;
}
}

h1, h4 {
  margin: 50px auto 50px auto;
  text-align: center;
}

img{
  width: 100px;
}
</style>