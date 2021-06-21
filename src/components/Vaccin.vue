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
            <span class="d-block subheading">Updates</span>
            <h1 class="heading mb-3">{{vaccin.nom}}</h1>
            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!</p>
          </div>
          
        </div>
      </div>
    </div>


    <!-- MAIN -->




    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-7 mx-auto text-center">
            <h2 class="mb-4 section-heading">Age statistics</h2>
            <h5><span>Middle age : {{virgule2(moy)}}, Maximum age : {{max}} , Minimum age : {{min}}</span></h5>
            <br>

         


             <DoughnutChart
          :percent="virgule(vaccin.count,vaccin.total)"
          :visibleValue="true"
          foregroundColor="red"
          :customText="'have the '+vaccin.nom+'<br>vaccine'"
          :strokeWidth="25"/>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4 mb-5" v-for=" vac of vaccin.data">
            <div class="post-entry">
              <a href="#" class="thumb">
                <div>
                  
                </div>
                
                <DoughnutChart
                  :percent="virgule(vac.vaccount,vaccin.somme)"
                  :visibleValue="true"
                  foregroundColor="blue"
                  :customText="'</br> of those have effects'"
                  :strokeWidth="12"/>
                 

                 

              </a>
              
              <br>
              <div class="post-meta text-center">
                <a href="">
                  <span class="icon-user"></span>
                  
                </a>
                <a href="#">
                  <span class="icon-comment"></span>
                </a>
              </div>
              <h3><a href="#">{{vac.effetScondaire__description}}</a></h3>
            </div>
          </div>
     
          </div>
          

        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="custom-pagination">
              <a href="#">1</a>
              <a href="#" class="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
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
import DoughnutChart from '../components/DoughnutChart.vue'
import axios from 'axios';


export default {
    
    props: {

},
  components: {
   
    Header,
    DoughnutChart,

  },
  beforeCreate() {
     axios.get('http://localhost:8000/api/statVaccin?vaccin='+this.$route.params.id,)
                 .then((res) => {
                          this.vaccin=res.data
                          this.effets=res.data.data
                          this.max=res.data.stat_age.max_age
                          this.moy=res.data.stat_age.moyenne_age
                          this.min=res.data.stat_age.min_age
                          console.log(this.vaccin)


                 })
                 .catch((error) => {
                   

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
  },
data(){
return {
    vaccinName:'Vaccin',
      percent: '25',
      text: 'Download Speed 8 Mbps',
      vaccin:[],
      effets:[],
      moy:0,
      min:0,
      max:0,

}
},
setup() { // using the composition API
  
    
  
    function virgule(x,y) { 
      return ((x/y)*100).toFixed(2);
    };

    function virgule2(x) { 
      return x.toFixed(2);
    };

    return {
      virgule2,
   
      virgule
    }
  },


 

}
</script>







