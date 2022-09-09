<template>
    <div class="container-fluid" v-if="listings">
        <!-- filter stuff -->
        <div id="row1" class="row align-content-center">
            <div class="col-md-2">
                <!-- search -->
                <label for="" class="form-label">Search by Listing Name</label>
                <input placeholder="Search by Name.." style="background-color:#fff; border-radius:5px; border: solid 1px rgb(206,212,218); padding-left: 10px;" class="form-control" type="text" v-model="search">
            </div>
            <div class="col-md-2">
                <!-- filter by full stack, back end , front end -->
                <label for="" class="form-label">Filter by Specialty</label>
                <select class="form-select" v-model="specialty">
                    <option value="All" selected disabled>Filter by Specialty</option>
                    <option value="All">All</option>
                    <option value="FullStack">FullStack</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                </select>
            </div>
            <div class="col-md-2">
                <!-- sort by name -->
                <label for="" class="form-label">Sort by Name</label>
                <select class="form-select" v-model="name" @change="sortName">
                    <option value="" selected disabled>Sort by Name</option>
                    <option value="desc">A-Z</option>
                    <option value="asc">Z-A</option>
                </select>
            </div>
        </div>

        <div id="row2" class="row">
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
    data() {
        return {
            search: "" ,
            name: '',
            specialty: 'All'
        }
    },
    mounted() {
        this.$store.dispatch('fetchListings')
           
    },
    computed: {
        // listings() {
        //     return this.$store.state.listings
        // },
        listings() {
            return this.$store.state.listings?.filter((listing) => {
             let isMatch = true
             if (!listing.listingName.toLowerCase().includes(this.search)) {
                isMatch = false
             }
             if (this.specialty !== "All" && this.specialty !== listing.SpecialtyOption) {
                isMatch = false
             }             
             return isMatch   
            })
        },
    },
    methods: {
        sortName() {
            let name = this.name
            let listings = this.$store.state.listings

            if (name === "desc") {
                listings.sort((a, b) => {
                    if (a.listingName < b.listingName) { return -1; }
                    if (a.listingName > b.listingName) { return 1; }
                    return 0;
                })

            } else if (name === "asc") {
                listings.sort((a, b) => {
                    if (a.listingName > b.listingName) { return -1; }
                    if (a.listingName < b.listingName) { return 1; }
                    return 0;
                })
            }
        }
    },
}
</script>

<style scoped>
.container-fluid {

    min-height: 120vh;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* scroll */
::-webkit-scrollbar {

    width: 0;
}

.col-md-4 {

    padding: 0;
}

.form-label{
    color: teal;
    background: #fff;
    border-radius: 10px;
    padding: 2px;

}

#row1{
    padding-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
}

#row2 {
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
    height: 60vh;
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

    0%,
    100% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }
}
</style>