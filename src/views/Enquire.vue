<template>
  <div class="enquire">
    <div class="container-fluid">
      
      <div v-if="listing">
        <div id="container-floating">
          <div class="nd4 nds"><img class="reminder">
            <a :href="listing[0].githubUrl" class="link" style="font-size:28px"><i class="bi bi-github"> </i></a>
          </div>
    
          <div class="nd3 nds"><img class="reminder">
            <a :href="listing[0].linkedinUrl" class="link" style="font-size:26px"><i class="bi bi-linkedin"></i></a>
          </div>
    
          <div class="nd1 nds">
            <a :href="listing[0].projectLink" class="link" style="font-size:26px"><i class="bi bi-link"></i></a>
          </div>
    
          <div id="floating-button">
            <p class="plus">+</p>
            <p class="edit" style="font-size:50px"></p>
            <!-- <img class="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"> -->
          </div>
        </div>
        <div class="row">
          <div id="column1" class="col-md-6">
            <h1 style="color:teal;font-weight:bold">{{  listing[0].listingName  }}'s Personal Details</h1>
            <br>
            <div class="card p-3 m-3 mx-auto" style="width: 350px;">
              <div class="back" id="test550" :style="`background: url(` + listing[0].listingUrl + `); background-repeat: no-repeat;background-size: cover; background-position: center;aspect-ratio:1/1; border:solid 7px teal;border-radius:10px`
              ">
                
              </div>

              <div class="card-body">
                <h5 class="card-title">{{  listing[0].listingName  }}</h5>
                <hr>
                {{  listing[0].listingDescription  }}
                <br>Specialising in {{  listing[0].SpecialtyOption  }}<p></p>

              </div>
            </div>

          </div>

          <div id="column2" class="col-md-6">
            <div class="cardies">
              <div class="content">
                <div class="front">
                  <br><br>
                  <h3 class="title text-white-50" style="color:white;">Press/Hover over me</h3>
                  
                  <!-- <h4 class="subtitle">About {{listing[0].listingName}}</h4> -->
                </div>

                <div class="back2">
                  <h4 class="description" style="font-family:'Times New Roman', Times, serif"><u>About me</u></h4>
                  <p class="description">
                    
                    {{listing[0].personDescription}}
                  </p>
                </div>
              </div>
            </div>
            <br>
            <div class="custom-form mb-sm-30">
              <form method="post" action="https://formspree.io/f/xdobyzlo" name="myForm"
                onsubmit="return validateForm()">

                <h1 style="color:teal;font-weight:bold">Enquire</h1>
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-12 col-md-5 mt-2">
                        <div class="input-field col ">
                          <input name="name" id="name" type="text" class="validate">
                          <label for="name">Name</label>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-5 pt-2">
                        <div class="input-field col ">
                          <input name="email" id="email" type="email" class="validate">
                          <label for="email">Email</label>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div class="col-lg-6 mt-2">
                    <div class="form-group">
                      <textarea name="comments" id="comments" rows="3" class="form-control border rounded"
                        placeholder="Your Enquiry will be sent via admin..."></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 text-center pt-3 pb-2">
                    <center>
                      <button type="submit" name="send" class="btn waves-effect waves-light">Submit</button>
                    </center>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchSingleListing', this.$route.params.id)
  },
  computed: {
    listing() {
      return this.$store.state.listing
    }
  }
}
</script>

<style scoped>
.back {
  height: 300px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  transition: 0.3s;
}

.back:hover{
  transform:scale(0.99)
}

/* .card-title {
  color: blanchedalmond;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.6);
  width: fit-content;
  height: 35px;
  border-radius: 5px;
} */

.card {
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 5px;

}


.enquire {
  height: 88.9vh;
  overflow-x: hidden;
 

}

.container-fluid {
  padding: 0 !important;
  background-color: transparent;

}

.container-fluid>.row {
  margin: 0;
  /* background: transparent; */
  background-color: rgb(24, 172, 158);
}

.col-md-6 {
  padding-top: 40px;
  padding-left: 140px;
  padding-right: 140px;
  padding-bottom: 150px;
  height: 88.9vh;
  overflow-x: hidden;
  /* width: 754.3px; */
}

#column1 {
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

/* From uiverse.io by @JoseIsra */
.cardies {
  width: 550px;

  cursor: pointer;
}

.content {
  text-align: center;
  position: relative;
  transition: all 1.5s;
  background-color: teal;
  padding: 5em;
  height: 200px;
  border-radius: 10px;

  transform-style: preserve-3d;
}

.cardies:hover .content {
  transform: rotateY(0.5turn);
}

.front,
.back2 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2em;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  height: 200px;
}

.front{
background-image: url("https://i.postimg.cc/XY5jcD7c/About-me-1024x404.png");
background-size: cover;
}

.title {
  transform: translateZ(5rem);
  font-size: 2rem;
}

.subtitle {
  transform: translateZ(2rem);
}

.back2 {
  transform: rotateY(0.5turn);
  background-color: #fff;
  color: black;
  border: solid 7px teal;
  border-radius: 10px
}

.description {
  transform: translateZ(3rem);
}

form {
  background-color: rgba(255, 255, 255, 0.626);
  padding-top: 3rem;
  padding: 20px;
  width: 550px;
  border-radius: 10px;
  height: 100%;

}

textarea.form-control {
  height: 180px;
  padding-top: 20px;
  padding: 20px;
}

.btn:hover {
  color: teal
}


label {
  color: #fff;
}

input-field {
  color: #fff;
}

/* toggle */

#floating-button {
	 width: 55px;
	 height: 55px;
	 border-radius: 50%;
	 background: teal;
	 position: fixed;
	 bottom: 30px;
	 right: 30px;
	 cursor: pointer;
	 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}
 .plus {
	 color: white;
	 position: absolute;
	 top: 0;
	 display: block;
	 bottom: 0;
	 left: 0;
	 right: 0;
	 text-align: center;
	 padding: 0;
	 margin: 0;
	 line-height: 55px;
	 font-size: 38px;
	
	;
	 font-weight: 300;
	 animation: plus-out 0.3s;
	 transition: all 0.3s;
}
 #container-floating {
	 position: fixed;
	 width: 70px;
	 height: 70px;
	 bottom: 30px;
	 right: 30px;
	 z-index: 90px;
}
 #container-floating:hover {
	 height: 400px;
	 width: 90px;
	 padding: 30px;
}
 #container-floating:hover .plus {
	 animation: plus-in 0.15s linear;
	 animation-fill-mode: forwards;
}
 .edit {
	 position: absolute;
	 top: 0;
	 display: block;
	 bottom: 0;
	 left: 0;
	 display: block;
	 right: 0;
	 padding: 0;
	 opacity: 0;
	 margin: auto;
	 line-height: 65px;
	 transform: rotateZ(-70deg);
	 transition: all 0.3s;
	 animation: edit-out 0.3s;
}
 #container-floating:hover .edit {
	 animation: edit-in 0.2s;
	 animation-delay: 0.1s;
	 animation-fill-mode: forwards;
}
 @keyframes edit-in {
	 from {
		 opacity: 0;
		 transform: rotateZ(-70deg);
	}
	 to {
		 opacity: 1;
		 transform: rotateZ(0deg);
	}
}
 @keyframes edit-out {
	 from {
		 opacity: 1;
		 transform: rotateZ(0deg);
	}
	 to {
		 opacity: 0;
		 transform: rotateZ(-70deg);
	}
}
 @keyframes plus-in {
	 from {
		 opacity: 1;
		 transform: rotateZ(0deg);
	}
	 to {
		 opacity: 0;
		 transform: rotateZ(180deg);
	}
}
 @keyframes plus-out {
	 from {
		 opacity: 0;
		 transform: rotateZ(180deg);
	}
	 to {
		 opacity: 1;
		 transform: rotateZ(0deg);
	}
}
 .nds {
	 width: 40px;
	 height: 40px;
	 border-radius: 50%;
	 position: fixed;
	 z-index: 99px;
	 transform: scale(0);
	 cursor: pointer;
}
 .nd1 {
	 background: #fff;
	 right: 40px;
	 bottom: 120px;
	 animation-delay: 0.2s;
	 animation: bounce-out-nds 0.3s linear;
	 animation-fill-mode: forwards;
}
 .nd3 {
	 background: #fff;
	 right: 40px;
	 bottom: 180px;
	 animation-delay: 0.15s;
	 animation: bounce-out-nds 0.15s linear;
	 animation-fill-mode: forwards;
}
 .nd4 {
	 background:#fff;
	 right: 40px;
	 bottom: 240px;
	 animation-delay: 0.1s;
	 animation: bounce-out-nds 0.1s linear;
	 animation-fill-mode: forwards;
}
 @keyframes bounce-nds {
	 from {
		 opacity: 0;
	}
	 to {
		 opacity: 1;
		 transform: scale(1);
	}
}
 @keyframes bounce-out-nds {
	 from {
		 opacity: 1;
		 transform: scale(1);
	}
	 to {
		 opacity: 0;
		 transform: scale(0);
	}
}
 #container-floating:hover .nds {
	 animation: bounce-nds 0.1s linear;
	 animation-fill-mode: forwards;
}
 #container-floating:hover .nd3 {
	 animation-delay: 0.08s;
}
 #container-floating:hover .nd4 {
	 animation-delay: 0.15s;
}
 #container-floating:hover .nd5 {
	 animation-delay: 0.2s;
}
 .letter {
	 font-size: 23px;
	 color: white;
	 position: absolute;
	 left: 0;
	 right: 0;
	 margin: 0;
	 top: 0;
	 bottom: 0;
	 text-align: center;
	 line-height: 40px;
}
 .reminder {
	 position: absolute;
	 left: 0;
	 right: 0;
	 margin: auto;
	 top: 0;
	 bottom: 0;
	 line-height: 40px;
}
 .profile {
	 border-radius: 50%;
	 width: 40px;
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 margin: auto;
	 right: 20px;
}
</style>