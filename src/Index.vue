<template>
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
          <div class="row align-items-center">
            <div class="col-lg-6 mr-auto text-center text-lg-left">
              <span class="d-block subheading">Covid-19 Awareness</span>
              <h1 class="heading mb-3">Stay Safe. Stay Home.</h1>
              <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!</p>
              <p class="mb-4"><a href="/stats" class="btn btn-primary">More stats</a></p>
  
  
  
            </div>
            <div class="col-lg-6 mb-">
              <figure class="illustration">
                <img src="/src/assets/images/illustration.png" alt="Image" class="img-fluid">
              </figure>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
      </div>
  
  
      <!-- MAIN -->
      
      <div class="site-section stats">
        <div class="container">
          <div class="row mb-3">
            <div class="col-lg-7 text-center mx-auto">
              <h2 class="section-heading">Coronavirus World Statistics</h2>
              <p>Statistics with a date <strong>{{date}}</strong></p>
            </div>
          </div>
          <div class="row"> 
            <div class="col-lg-4">
              <div class="data">
                <span class="icon text-primary">
                  <span class="flaticon-virus"></span>
                </span>
                <strong class="d-block number">{{totalConfirmed}}</strong>
                <span class="label">Total Cases</span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="data">
                <span class="icon text-primary">
                  <span class="flaticon-virus"></span>
                </span>
                <strong class="d-block number">{{totalDeaths}}</strong>
                <span class="label">Deaths</span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="data">
                <span class="icon text-primary">
                  <span class="flaticon-virus"></span>
                </span>
                <strong class="d-block number">{{newRecovered}}</strong>
                <span class="label">Recovered Cases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
  
    
  

    
      
    </div>
<div>
    <div class="row d-flex justify-content-center">
     
      
      <div class=" col-md-auto d-flex justify-content-center" v-for=" vaccin of vaccins.msg">
           <a :href="'/vaccin/' + vaccin.vaccin">
            <DoughnutChart
          :percent="virgule(vaccin.vaccount,vaccins.count)"
          :visibleValue="true"
          foregroundColor="green"
          :customText="vaccin.vaccin__nom"
          :strokeWidth="20"/>
               </a>

      </div>
      
     
  </div>
    
  </div>
  <br>
    <Form  />


    <div>
      
                  
              
     
  
    </div>
  </div>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <figure class="img-play-vid">
                <img src="/src/assets/images/hero_1.jpg" alt="Image" class="img-fluid">
                <div class="absolute-block d-flex">
                  <span class="text">Watch the Video</span>
                  <a href="https://www.youtube.com/watch?v=9pVy8sRC440" data-fancybox class="btn-play">
                    <span class="icon-play"></span>
                  </a>
                </div>
              </figure>
            </div>
            <div class="col-lg-5 ml-auto">
              <h2 class="mb-4 section-heading">What is Coronavirus?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!</p>
              <ul class="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
              <p><a href="#" class="btn btn-primary">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container pb-5">
        <div class="row">
          <div class="col-lg-3">
            <div class="feature-v1 d-flex align-items-center">
              <div class="icon-wrap mr-3">
                <span class="flaticon-protection"></span>
              </div>
              <div>
                <h3>Protection</h3>
                <span class="d-block">Lorem ipsum dolor sit.</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="feature-v1 d-flex align-items-center">
              <div class="icon-wrap mr-3">
                <span class="flaticon-patient"></span>
              </div>
              <div>
                <h3>Prevention</h3>
                <span class="d-block">Lorem ipsum dolor sit.</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="feature-v1 d-flex align-items-center">
              <div class="icon-wrap mr-3">
                <span class="flaticon-hand-sanitizer"></span>
              </div>
              <div>
                <h3>Treatments</h3>
                <span class="d-block">Lorem ipsum dolor sit.</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="feature-v1 d-flex align-items-center">
              <div class="icon-wrap mr-3">
                <span class="flaticon-virus"></span>
              </div>
              <div>
                <h3>Symptoms</h3>
                <span class="d-block">Lorem ipsum dolor sit.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="site-section bg-primary-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
  
              <div class="row">
                <div class="col-6 col-lg-6 mt-lg-5">
                  <div class="media-v1 bg-1">
                    <div class="icon-wrap">
                      <span class="flaticon-stay-at-home"></span>
                    </div>
                    <div class="body">
                      <h3>Stay at home</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p>
                    </div>
                  </div>
  
                  <div class="media-v1 bg-1">
                    <div class="icon-wrap">
                      <span class="flaticon-patient"></span>
                    </div>
                    <div class="body">
                      <h3>Wear facemask</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-6">
                  <div class="media-v1 bg-1">
                    <div class="icon-wrap">
                      <span class="flaticon-social-distancing"></span>
                    </div>
                    <div class="body">
                      <h3>Keep social distancing</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p>
                    </div>
                  </div>
  
                  <div class="media-v1 bg-1">
                    <div class="icon-wrap">
                      <span class="flaticon-hand-washing"></span>
                    </div>
                    <div class="body">
                      <h3>Wash your hands</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-lg-5 ml-auto">
              <h2 class="section-heading mb-4">How to Prevent Coronavirus?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis doloribus consequatur fugit voluptatum ex rerum perspiciatis cupiditate, esse hic!</p>
              <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, error!</p>
  
              <ul class="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
  
              <p><a href="#" class="btn btn-primary">Read more about prevention</a></p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-7 mx-auto text-center">
              <span class="subheading">What you need to do</span>
              <h2 class="mb-4 section-heading">How To Protect Yourself</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 ">
              <div class="row mt-5 pt-5">
                <div class="col-lg-6 do ">
                  <h3>You should do</h3>
                  <ul class="list-unstyled check">
                    <li>Stay at home</li>
                    <li>Wear mask</li>
                    <li>Use Sanitizer</li>
                    <li>Disinfect your home</li>
                    <li>Wash your hands</li>
                    <li>Frequent self-isolation</li>
                  </ul>
                </div>
                <div class="col-lg-6 dont ">
                  <h3>You should avoid</h3>
                  <ul class="list-unstyled cross">
                    <li>Avoid infected people</li>
                    <li>Avoid animals</li>
                    <li>Avoid handshaking</li>
                    <li>Aviod infected surfaces</li>
                    <li>Don't touch your face</li>
                    <li>Avoid droplets</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <img src="/src/assets/images/protect.png" alt="Image" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="site-section bg-primary-light">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-7 mx-auto text-center">
              <h2 class="mb-4 section-heading">Symptoms of Coronavirus</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="symptom d-flex">
                <div class="img">
                  <img src="/src/assets/images/symptom_high-fever.png" alt="Image" class="img-fluid">
                </div>
                <div class="text">
                  <h3>High Fever</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsum repellendus animi modi iure provident, cupiditate perferendis voluptatem!</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="symptom d-flex">
                <div class="img">
                  <img src="/src/assets/images/symptom_cough.png" alt="Image" class="img-fluid">
                </div>
                <div class="text">
                  <h3>Cough</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ullam illo laborum repellendus vel esse dolor, sunt exercitationem.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="symptom d-flex">
                <div class="img">
                  <img src="/src/assets/images/symptom_sore-troath.png" alt="Image" class="img-fluid">
                </div>
                <div class="text">
                  <h3>Sore Troath</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse voluptatum, vel inventore at! Ullam, libero reiciendis amet?</p>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mb-4">
              <div class="symptom d-flex">
                <div class="img">
                  <img src="/src/assets/images/symptom_headache.png" alt="Image" class="img-fluid">
                </div>
                <div class="text">
                  <h3>Headache</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem voluptatem ratione veniam rerum qui quibusdam reprehenderit quis.</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row justify-content-md-center">
            <div class="col-lg-10">
              <div class="note row">
  
                <div class="col-lg-8 mb-4 mb-lg-0"><strong>Stay at home and call your doctor:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eaque.</div>
                <div class="col-lg-4 text-lg-right">
                  <a href="#" class="btn btn-primary"><span class="icon-phone mr-2 mt-3"></span>Help line</a>
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
                    <li><a hef="#">WHO Website</a></li>
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
      
</template>

<script>
import Form from './components/Form.vue'
import DoughnutChart from './components/DoughnutChart.vue'
import Header from './components/Header.vue'
import axios from 'axios';


export default {
  name: 'Index',
  components: {
    DoughnutChart,
    Form,
    Header,
  },
  beforeCreate() {
     axios.get('http://localhost:8000/api/statVaccins',)
                 .then((res) => {
                          this.vaccins=res.data


                 })
                 .catch((error) => {
                   

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
      axios.get('https://api.covid19api.com/summary',)
                 .then((res) => {
                          this.stats=res.data
                          this.totalConfirmed=this.stats.Global.TotalConfirmed
                          this.newRecovered=this.stats.Global.NewRecovered
                          this.totalDeaths=this.stats.Global.TotalDeaths
                           this.date=this.stats.Global.Date
                          
                        console.log(this.stats)


                 })
                 .catch((error) => {
                   

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });            
                 }
                 ,
  data() {
    return {
      percent: '25',
      text: 'Download Speed 8 Mbps',
      vaccins:[],
      stats:[],
      totalConfirmed:0,
      newRecovered:0,
      totalDeaths:0,
      date:"2021/05"
    }
  },

setup() { // using the composition API
  
    
  
    function virgule(x,y) { 
      return ((x/y)*100).toFixed(2);
    };

    return {
   
      virgule
    }
  }

}

// This starter template is using Vue 3 experimental <script setup> SFCs
 //Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>


<style lang="scss" scoped>
.centered-div{
  margin: 0 auto;
  text-align: center;
}
input[type=range] {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ac51b5;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.6px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ac51b5;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ac51b5;
  border-radius: 25px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12.8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 39px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #ac51b5;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #ac51b5;
  border: 0px solid #000101;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 39px;
  border-radius: 7px;
  background: #65001c;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #ac51b5;
}
input[type=range]:focus::-ms-fill-upper {
  background: #ac51b5;
}
.column {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
</style>

