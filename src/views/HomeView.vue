<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div id="column1" class="col-md-6">
          <h1>Welcome to CodeBricks!</h1>
          <img class="yrimg img-fluid" src="https://i.postimg.cc/rmCTB1M4/codebricks.jpg" alt="">
          <p class="mt-4">
          Sign up Today and register yourself as a Freelancer on our wall!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nobis voluptas? Qui cum perferendis voluptates quia officiis nam quos eos itaque, aperiam error quaerat rerum. Ipsum illum molestias temporibus ducimus.</p>
          <br>
          <center>
            <h5 style="background-color:rgb(255,129,132); width:fit-content;"><u>Scroll for more info...</u></h5>

          </center>
          <div class="cardo">
            <div class="cardo-img"><img class="img-fluid" src="https://i.postimg.cc/NMYsS5yW/IMG-1145.jpg" alt="">
            </div>
            <div class="cardo-info">
              <br>
              <h1>About Me</h1>
              <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat,
                consequuntur doloribus voluptate esse iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Qui sequi, aliquam accusantium eius asperiores quod provident amet et quasi fuga doloribus debitis,
                mollitia voluptates natus esse cumque vitae incidunt ea! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non explicabo repellendus corpori</p>
              <p class="text-title">- Ikhlaas Rawoot</p>
            </div>
          </div>
        </div>

        <div id="column2" class="col-md-6">
          <div id="con" class="container white z-depth-2">
            <ul class="teal">
              <li class="">
                <h4> Getting Started..</h4>
              </li>

            </ul>
            <div id="login" class="col ">
              <form class="col ">
                <div class="form-container">
                  <h2 class="">Login</h2>
                  <div class="row">
                    <div class="input-field col ">
                      <input v-model="logemail" id="email" type="email" class="validate">
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col ">
                      <input v-model="loguserpassword" id="password" type="password" class="validate">
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <br>
                  <center>
                    <button @click="login" class="btn waves-effect waves-light" type="button"
                      name="action">Connect</button>
                    
                    <!-- <br>
                    <br>
                    <a href="">Forgotten password?</a> -->
                  </center>
                </div>
                <hr>
              </form>
            </div>
            <div id="register" class="col ">
              <form class="col">
                <div class="form-container">
                  <h2 class="">Register</h2>
                  <div class="row">
                    
                    <div class="input-field col ">
                      <input id="Fullname" v-model="fullname" type="text" class="validate">
                      <label for="Fullname">Fullname</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col ">
                      <input id="remail" type="email" v-model="email" class="validate">
                      <label for="remail">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col ">
                      <input id="email-confirm" type="email" class="validate">
                      <label for="email-confirm">Email Confirmation</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col ">
                      <input id="rpassword" type="password" v-model="userpassword" class="validate">
                      <label for="rpassword">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col ">
                      <input id="password-confirm" type="password" class="validate">
                      <label for="password-confirm">Password Confirmation</label>
                    </div>
                  </div>
                  <center>
                    <button class="btn waves-effect waves-light" @click="register" type="button" name="action">Submit</button>
                  </center>
                </div>
                <br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      fullname:"",
      email: "",
      logemail: "",
      usertype:"",
      userpassword: "",
      loguserpassword: "",
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.logemail,
        userpassword: this.loguserpassword

      }
      this.$store.dispatch("login", payload)
    },
    register(){
      const payload = {
        fullname:this.fullname,
        email:this.email,
        usertype:this.usertype,
        userpassword:this.userpassword
      }
      this.$store.dispatch("register",payload)
     
    }
  }

}

</script>

<style scoped>

.yrimg{
    position: relative;
    width: 375px;
    height: 220px;
    background-size: cover;
    object-fit: cover;
    /* display: flex;
    align-self: flex-start; */
    border-radius:10px;
    border: 8px solid teal;
}

hr{
  color: teal;
  height: 1px;
}

.home {
  height: 88.9vh;
  overflow-x: hidden;


}

h1{
  font-weight:bolder;
}

h2{
  color: teal;
  text-decoration: underline;
}


.container-fluid {
  padding: 0 !important;
  background-color: transparent;
  

}

.container-fluid>.row {
  margin: 0;
  background: transparent;
  background-color: rgb(24, 172, 158);
}

.col-md-6 {
  padding: 90px;
  height: 90vh;
  overflow-x: hidden;
  width: 754.3px;
}

#column1 {
  padding-top: 100px;
  overflow-y: scroll;
  background-color: #fff;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

}

#column2 {
  background-color: #18ac9e;
  color: #FDE7E0;

}

/* scroll */
::-webkit-scrollbar {
  background-color: rgb(24, 172, 158);
  width: 5px;
}


/* 2 */
/* body {
  background: #f5f5f5;
} */

h5 {
  font-weight: 400;
}

h4 {
  padding-top: 20px;
}

#con {

  width: 400px;
  min-height: 1000px;
  border-radius: 10px;
}

.tabs .indicator {
  background-color: #e0f2f1;
  height: 60px;
  opacity: 0.3;
}

.form-container {
  padding: 55px;
  padding-top: 10px;
}

.confirmation-tabs-btn {
  position: absolute;
}

.teal {
  width: 100%;
  height: 60px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.teal-text {
  padding-top: 20px;
}




/* From uiverse.io by @alexruix */
/*Magic card*/
.cardo {
  /* width: 570px;
  min-height: 0px; */
  background: #18ac9e;
  overflow: visible;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  border-radius: 10px;
  border: solid 8px teal;
  object-fit:cover;
  background-size: contain;

}



.cardo-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 0 1rem;

}


img {
  /* --size: 200px;
  width: var(--size);
  height: var(--size); */
  width: 200px;
  height: 220px;
  border-radius: 10px;
  border: solid 8px teal;
  margin-top:20px;
  object-fit: cover;
  object-position: 0px 0px;
  /*transform: translateY(-50%);
 background: #42caff;
 background: linear-gradient(to bottom, #42caff 0%, #e81aff 100%);
 position: relative;
 transition: all .3s ease-in-out; */
}


/*Text*/
.text-title {
  /* text-transform: uppercase; */
  font-size: 1em;
  color: #fff;
  letter-spacing: 0.05rem;
}

.text-body {
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-style: italic;
}

</style>
