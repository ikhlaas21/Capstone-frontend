<template>
    <nav class="navbar navbar-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/MZrYVr8w/bricks-removebg-preview.png" alt="">
            </a>
            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation Panel</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="lowernav">
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <router-link to="/">Home</router-link> 
                        <router-link to="/listings">View Our Users</router-link>
                        <router-link to="/userinfo">User Profile</router-link>
                        <router-link to="/admin">Admin</router-link>

                    </ul>
                    <Footer></Footer>

                </div>
            </div>
            <div>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span  class=""><i class="bi bi-map" style="font-size:20px ;"> Navbar</i></span>
                </button>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class=""><i class="bi bi-envelope-open" style="font-size:20px; ;"> Enquiries</i></span>
                </button>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Enquiries</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="lowernav">
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


                    </ul>

                </div>
            </div>
        </div>
    </nav>
    <div class="lowernav">
        <p>Website in progress...</p>
    </div>
</template>
<script>
   
import Footer from './footer.vue';
export default {
    components:{
    Footer,
  
}
}
</script>

<style scoped>
nav {
    padding: 0px;
    background-color: rgb(19, 158, 144);
    z-index: 100;
    height: 9vh;

}
::-webkit-scrollbar {
  
  width:0;
}

.navbar-brand {
    color: #ffffff
}

nav a {
    font-weight: bold;
    color: teal;


}

div.container-fluid {
    display: flex;
    justify-content: space-between;

}


nav a:hover {
    color: black;

}

nav a.router-link-exact-active {
    color: rgb(19, 158, 144);
}

.navbar-toggler {
    height: 60px;
    width: 140px;
}

.offcanvas-title {
    color: #FDE7E0;
}

.offcanvas-header {
    background-color: rgb(19, 158, 144);
    height: 9vh;
}

.offcanvas-body {
    background-color: #ffffff;
height: 50vh;
}

.lowernav {
    background-color: rgb(0, 148, 134);
    height: 15px;
    width: 100%;
    z-index: 100 !important;
    


}

.navbar-toggler {
    margin-left: 15px;
}

p {
    font-weight: bold;
    font-size: 11px;
    color: #FDE7E0;
}

img{
    height:6.5vh;
    width: 10vh;
    margin-bottom: 1vh;
}
</style>