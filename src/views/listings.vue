<template>
    <div class="container-fluid" v-if="listings">
        <div class="row">
            <div class="col-md-4" v-for="list in listings" :key="list.id">
            <router-link :to="{name : 'enquire' , params : {id : list.id}}">
                <div class="card p-3 m-3 mx-auto" style="width: 350px;">
                    <div class="back" id="test550" :style="`background: url(` + list.listingUrl + `); background-repeat: no-repeat;background-size: cover; background-position: center;aspect-ratio:1/1; border:solid 7px teal;border-radius:10px`
                    ">
                        <h5 class="card-title">{{ list.listingName }}</h5>
                    </div>

                    <div class="card-body">
                        <p class="card-text">
                            <i class="bi bi-info-circle"></i> More Info..
                        </p>
                        <hr>
                        {{ list.listingDescription }}
                        <br>Specialising in {{ list.SpecialtyOption }}<p></p>

                    </div>
                </div>
            </router-link>
            </div>
            <!-- <div class="col-md-6"></div> -->
        </div>


    </div>
    <div v-else>
        <div class="spinner">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('fetchListings')
    },
    computed: {
        listings() {
            return this.$store.state.listings
        }
    }
}
</script>

<style scoped>

.container-fluid{
    
    min-height: 120vh;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* scroll */
::-webkit-scrollbar {
  
  width:0;
}

.col-md-4 {

    padding: 0;
}

.row {
    width: 100%;
    z-index: -50px;
}

body {
    overflow-x: hidden;
    
}

.back {
    height: 200px;
    display: flex;
    align-items: flex-end;
    text-align: center;
}


.card-title {
    color: blanchedalmond;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.6);
    width: fit-content;
    height: 35px;
    border-radius: 5px;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 5px;
}


/* From uiverse.io by @satyamchaudharydev */
.spinner {
 --clr: rgb(0, 113, 128);
 --gap: 6px;
   /* gap between each circle */
 width: 100%;
 height:60vh;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: var(--gap);
 
 
}

.spinner span {
 width: 30px;
 height: 30px;
 border-radius: 100%;
 background-color: var(--clr);
 opacity: 0;
}

.spinner span:nth-child(1) {
 animation: fade 1s ease-in-out infinite;
}

.spinner span:nth-child(2) {
 animation: fade 1s ease-in-out 0.33s infinite;
}

.spinner span:nth-child(3) {
 animation: fade 1s ease-in-out 0.66s infinite;
}

@keyframes fade {
 0%, 100% {
  opacity: 1;
 }

 60% {
  opacity: 0;
 }
}
</style>