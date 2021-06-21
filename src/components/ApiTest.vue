<template>
<div>
    <div id="overlayer"></div>
  <div class="loader">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>


  <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    
    <Header />




    <div class="hero-v1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 text-center mx-auto">
            <span class="d-block subheading">Contact</span>
            <h1 class="heading mb-3">Get In Touch</h1>
            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!</p>
          </div>
          
        </div>
      </div>
    </div>


    <!-- MAIN -->

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <form v-on:submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-5">
                  <div class="form-group">
                    <label for="fname">Patient age quantile</label>
                    <input type="text" id="fname" class="form-control" name="1"  v-model="t[0]">
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <label for="lname">Hematocrit</label>
                    <input type="text" id="lname" class="form-control" name="2" v-model="t[1]" >
                  </div>
                </div>
                 <div class="col-lg-3">
                  <div class="form-group">
                    <label for="fname">Hemoglobin</label>
                    <input type="text" id="fname" class="form-control" name="3" v-model="t[2]">
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <label for="lname">Platelets</label>
                    <input type="text" id="lname" class="form-control" name="4" v-model="t[3]">
                  </div>
                </div>
              </div>
             <div class="row">
                <div class="col-lg-5">
                  <div class="form-group">
                    <label for="fname">Mean platelet volume</label>
                    <input type="text" id="fname" class="form-control" name="5" v-model="t[4]">
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="form-group">
                    <label for="lname">Red blood Cells</label>
                    <input type="text" id="lname" class="form-control" name="6" v-model="t[5]">
                  </div>
                </div>
                 <div class="col-lg-3">
                  <div class="form-group">
                    <label for="fname">Lymphocytes</label>
                    <input type="text" id="fname" class="form-control" name="7" v-model="t[6]">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="lname">Mean corpuscular hemoglobin concentration (MCHC)</label>
                    <input type="text" id="lname" class="form-control" name="8" v-model="t[7]">
                  </div>
                </div>
              </div>
               <div class="row">
                <div class="col-lg-3">
                  <div class="form-group">
                    <label for="fname">Leukocytes</label>
                    <input type="text" id="fname" class="form-control" name="9" v-model="t[8]">
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <label for="lname">Basophils</label>
                    <input type="text" id="lname" class="form-control" name="10" v-model="t[9]">
                  </div>
                </div>
                 <div class="col-lg-12">
                  <div class="form-group">
                    <label for="fname">Mean corpuscular hemoglobin (MCH)</label>
                    <input type="text" id="fname" class="form-control" name="11" v-model="t[10]">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="lname">Eosinophils</label>
                    <input type="text" id="lname" class="form-control" name="12" v-model="t[11]">
                  </div>
                </div>
              </div>
               <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="fname">Mean corpuscular volume (MCV)</label>
                    <input type="text" id="fname" class="form-control" name="13" v-model="t[12]">
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-group">
                    <label for="lname">Monocytes</label>
                    <input type="text" id="lname" class="form-control" name="14" v-model="t[13]">
                  </div>
                </div>
                 <div class="col-lg-6">
                  <div class="form-group">
                    <label for="fname">Red blood cell distribution width (RDW)</label>
                    <input type="text" id="fname" class="form-control" name="15" v-model="t[14]">
                  </div>
                </div>
              
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <input type="submit" class="btn btn-primary" value="Test">
                </div>
              </div>
              <br>

                <div class="alert alert-primary" role="alert" v-if="valid">
                    <span v-text="msg">   </span>
               </div>

            </form> 
          </div>

          <div class="col-lg-5 ml-auto">
            <h3 class="mb-3 side-title">Quick info</h3>
            <div class="quick-contact">

              <div class="d-flex">
                <span class="icon-room"></span>
                <address>
                  Fake street, 3929, London
                </address>
              </div>
              <div class="d-flex">
                <span class="icon-phone"></span>
                <a href="#">+1 291 2902 392</a>
              </div>
              <div class="d-flex">
                <span class="icon-envelope"></span>
                <a href="#">info@mydomain.com</a>
              </div>
              <div class="d-flex">
                <span class="icon-globe"></span>
                <a href="#">https://mywebsite.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2 class="footer-heading mb-4">About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus architecto fugiat!</p>
            <div class="my-5">
              <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
              <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
              <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
              <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-4">
                <h2 class="footer-heading mb-4">Quick Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#">Symptoms</a></li>
                  <li><a href="#">Prevention</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">About Coronavirus</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-lg-4">
                <h2 class="footer-heading mb-4">Helpful Link</h2>
                <ul class="list-unstyled">
                  <li><a href="#">Helathcare Professional</a></li>
                  <li><a href="#">LGU Facilities</a></li>
                  <li><a href="#">Protect Your Family</a></li>
                  <li><a href="#">World Health</a></li>
                </ul>
              </div>
              <div class="col-lg-4">
                <h2 class="footer-heading mb-4">Resources</h2>
                <ul class="list-unstyled">
                  <li><a href="#">WHO Website</a></li>
                  <li><a href="#">CDC Website</a></li>
                  <li><a href="#">Gov Website</a></li>
                  <li><a href="#">DOH Website</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-12">
           <div class="border-top pt-5">
                <p class="copyright"><small>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy; All rights reserved | Godfadher <i class="icon-heart text-danger" aria-hidden="true"></i> by Hamrouni  and Karoui<a href="" target="_blank" ></a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></small></p>
  
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import Header from '../components/Header.vue'
import axios from 'axios';




export default {
  components: {
   
    Header,
  },

  data(){
return {
  t:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  msg:"",
  valid:false
    
  }},
  /* beforeCreate() {
     axios.get('http://localhost:4000',)
                 .then((res) => {
                   


                 })
                 .catch((error) => {
                   

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });},*/
   methods: {
  submitForm(){
   
    let x
    axios({
  method: 'post',
  url: "http://localhost:4000/apiTest",
  headers: {}, 
  data: {
    tab: this.t, // This is the body part
  }
}) .then((res) => {
                   

     console.log(res)
        this.valid=true
        if(res.data.resultat[0]==0)
        {
          this.msg="result : negative"
        }
        else {
          this.msg="result : positive"
        }
        console.log(res.data.resultat[0])
        

                 }).catch((error) => {
                   this.valid=true
                   this.msg="error"

                     // error.response.status Check status code
                 }).finally(() => {
   
                 });

    
}
   }}
</script>