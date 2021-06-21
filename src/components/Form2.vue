<template>
      <div class="d-flex justify-content-center">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

      <button  class="btn btn-primary" v-on:click="affichierForm">Share your vaccination experience with us!</button>
      </div>
      <br><br>
    <div v-if="verification">
  
      <div class="d-flex justify-content-center">
  
  
  
  
    <form action="google.com">
      <div>
          <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
          <div class="row">
                        
                      <div class="card-body"><h5 class="card-title">COVID-19 Vaccine Registration Form</h5>
                              <div class="position-relative form-group"><label for="exampleEmail"
                                                                               class="">Email</label><input name="email"
                                                                                                            id="exampleEmail"
                                                                                                            placeholder="with a placeholder"
                                                                                                            type="email"
                                                                                                            class="form-control">
                              </div>
                              <div class="position-relative form-group"><label for="examplePassword"
                                                                               class="">Name</label><input
                                  name="name" id="examplePassword" placeholder="Name" type="text"
                                  class="form-control"></div>

                                    <div class="position-relative form-group"><label for="examplePassword"
                                                                               class="">Password</label><input
                                  name="password" id="examplePassword" placeholder="Age" type="number"
                                  class="form-control"></div>
                              <div class="position-relative form-group"><label for="exampleSelect" class="">Vaccin Type</label><select
                                  name="select" id="exampleSelect" class="form-control">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </select></div>
                              <h3></h3>
                                <label for="exampleSelec" class="">Sex</label>
                               <div class="main-card mb-3 card">
                                   
                                  <div class="card-body">
                                      
                              <fieldset class="position-relative form-group">
                                  
                                  <div class="position-relative form-check"><label class="form-check-label"><input
                                      name="radio1" type="radio" class="form-check-input"> Man</label></div>
                                  <div class="position-relative form-check"><label class="form-check-label"><input
                                      name="radio1" type="radio" class="form-check-input"> Women</label></div>
                                 
                              </fieldset>
                               </div>
                                  </div>
                              <div class="position-relative form-group"><label for="exampleSelectMulti" class="">Please check all symptoms that apply:</label><select multiple="" name="selectMulti" id="exampleSelectMulti"
                                                          class="form-control">
                                  <option>Loss of taste or smell</option>
                                  <option>Difficulty breathing</option>
                                  <option>Cough</option>
                                  <option>Runny Nose</option>
                                  <option>Body Aches</option>
                              </select></div>
                            
                              </div>



                           

                            



                              <div class="main-card mb-3 card">
                                  <div class="card-body"><h5 class="card-title">Checkboxes &amp; Radios</h5>
                                    
                                          <fieldset class="position-relative form-group">
                                              <div class="position-relative form-check"><label class="form-check-label"><input
                                                  name="radio1" type="checkbox" class="form-check-input"> Option one is this and that—be
                                                  sure to include why it's great</label></div>
                                              <div class="position-relative form-check"><label class="form-check-label"><input
                                                  name="radio1" type="checkbox" class="form-check-input"> Option two can be something
                                                  else and selecting it will deselect option one</label></div>
                                              <div class="position-relative form-check disabled"><label
                                                  class="form-check-label"><input name="radio1"  type="checkbox"
                                                                                  class="form-check-input"> Option three is
                                                  disabled</label></div>
                                          </fieldset>
                                          <div class="position-relative form-check"><label class="form-check-label"><input
                                              type="checkbox" class="form-check-input"> Check me out</label></div>
                                     
                                  </div>
                              </div>

                              
                         
                              
                              <button class="mt-1 btn btn-primary">Submit</button>
                          
                      </div>
                      
                  </div>
                  </form>
              </div>
              
      
    </div>
<br>
</template>

<script>
import DoughnutChart from 'vue-doughnut-chart'

export default {
    components:{
        DoughnutChart

    },
    props: {
  verif: {
      type: Boolean,
      default: true
    },

},
data(){
return {
    verification:false
}
},

  methods: {
  affichierForm: function () {
    this.verification=!this.verification
  }
}
}
</script>
  