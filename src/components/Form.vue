<template>
      <div class="d-flex justify-content-center">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

      <button  class="btn btn-primary" v-on:click="affichierForm">Share your vaccination experience with us!</button>
      </div>
      <br><br>
    <div v-if="verification">
  
      <div class=" container card-body ">
      
  
  
  
    <form v-on:submit.prevent="submitForm">
       
       
                <div class=" position-relative form-group">
                    <h3 class="card-title">COVID-19 Vaccine Registration Form</h3>
                    <label for="name">Last Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Last name" v-model="vaccinateur.nom">
                </div>
                <div class=" position-relative form-group">
                    <h3 class="card-title">COVID-19 Vaccine Registration Form</h3>
                    <label for="name">First name</label>
                    <input type="text" class="form-control" id="name" placeholder="First name" v-model="vaccinateur.prenom">
                </div>
                <div class=" position-relative form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                        v-model="vaccinateur.email">
                </div>
                 <div class=" position-relative form-group">
                    <label for="email">Age</label>
                    <input type="Number" class="form-control" id="email" placeholder="age"
                        v-model="vaccinateur.age">
                </div>
                <div class=" position-relative form-group">
                    <label for="formControlRange">Gender</label><br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="gender-male" value="male"
                            v-model="vaccinateur.sexe">
                        <label class="form-check-label" for="gender">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="gender-female" value="female"
                            v-model="vaccinateur.sexe">
                        <label class="form-check-label" for="gender">Female</label>
                    </div>
                </div>
                <div class=" position-relative form-group">
                    <label for="refer">Select Vaccin</label>
                    <select name="refer" class="form-control" id="refre"  v-model="vaccinateur.vaccin">
                        <option v-for="vaccin in vaccins" :value="vaccin.id">{{vaccin.nom}}</option>
                      >
                    </select>
                </div>
                 <div class=" position-relative form-group">
                    <label for="refer">Select Your Country</label>
                    <select name="refer" class="form-control" id="refre" v-model="vaccinateur.pays">
                        <option v-for="pay in payss" :value="pay.id">{{pay.nom}}</option>
                    </select>
                </div>
                <div class=" position-relative form-group">
                    <label for="exampleFormControlSelect2">Medical </label>
                    <select multiple class="form-control" id="exampleFormControlSelect2" v-model="vaccinateur.maladies">
                        <option  v-for="(maladie,index) in maladiess" :key="index" :value="maladie.id">{{maladie.description}}</option>
                        
                    </select>
                </div>
                <div  class=" position-relative form-group">
                    <label for="formControlRange">Asymptoms</label><br />
                    <div   v-for="(effet,index) in effets" :key="index" class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox" :value="effet.id"
                            v-model="form.effetss">
                        <label class="form-check-label" for="inlineCheckbox1">{{effet.description}}</label>
                    </div>
                    
                </div>
             
                <div class="position-relative form-group">
                    <label for="satisfaction">How satisfied are you with our service?</label>
                    <input type="range" name="satisfaction" class="form-control-range" id="formControlRange" min="0"
                        max="10" v-model="form.satisfaction">
                </div>
                <div class="position-relative form-group">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="terms" value="yes" v-model="form.terms">
                        <label class="form-check-label" for="inlineCheckbox3">Agree to Terms & Conditions</label>
                    </div>
                </div>
                <div class="position-relative form-group">
                    <button class="btn btn-primary">Submit</button>
                </div>
                 <div class="alert alert-primary" role="alert" v-if="valMsg">
                    <span v-text="msg">   </span>
               </div>
            </form>
              </div>
              
      
    </div>
<br>
</template>

<script>
import DoughnutChart from 'vue-doughnut-chart'
import axios from 'axios';


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
beforeCreate() {
    console.log('At this point, events and lifecycle have been initialized.')
     axios.get('http://localhost:8000/api/vaccins/',)
                 .then((res) => {
                          this.vaccins=res.data
                        


                 })
                 .catch((error) => {
                   

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
        axios.get('http://localhost:8000/api/maladie/',)
                 .then((res) => {
                          this.maladiess=res.data
                        
                          

                 })
                 .catch((error) => {
                     console.log("erreur")

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });     
                   axios.get('http://localhost:8000/api/pays/',)
                 .then((res) => {
                          this.payss=res.data
                      

                 })
                 .catch((error) => {
                     console.log("erreur")

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 }); 
                    axios.get('http://localhost:8000/api/effetSecondaire/',)
                 .then((res) => {
                          this.effets=res.data
                        

                 })
                 .catch((error) => {
                     console.log("erreur")

                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });        
                 
  },
data(){
return {
    msg:"",
    valMsg:false,
    verification:false,
     vaccinateur: {
           nom:'',
                 prenom:'',
                 email: '',
                  age:'0',
                  pays:1,
                  sexe:'Homme',
                   vaccin:'',
                    maladies: [],
     },
     form: {
               
                    effetss:[],


               
                maladiess:[],
                payss:[],
                effets:[],
                
                vaccins:[],
                
                
                 
                 name: '',
           
                gender: '',
                refer: '',
                profession: [],
                message: '',
                satisfaction: '5',
                interested: [],
                terms: false
            },
            description:'effet5',
            'id':'2'
}
},
   

  methods: {
  affichierForm: function () {
    this.verification=!this.verification
  },
  submitForm(){
      console.log(this.description)
       let i = 3
       axios.post('http://localhost:8000/api/vaccinateur/',this.vaccinateur )
                 .then((res) => {
                     //Perform Success Action
                      i=res.data.id
                        for (const effet of this.form.effetss) {
                                           

                           axios.post('http://localhost:8000/api/declaration/',{"vaccinateur":i,"effetScondaire":effet,"vaccin":this.vaccinateur.vaccin,"dateSymtomes":"2021-05-12T02:46:00Z"} )
                                .then((res) => {
                                    
                                       
                                     

                                })
                                .catch((error) => {
                                    this.valMsg=true
                                    this.msg="error"
                                    // error.response.status Check status code
                                }).finally(() => {
                                    //Perform action in always
                                });
                        }
                      
                          
                 })
                 .catch((error) => {
                     
                      this.valMsg=true
                     this.msg="error"
                 }).finally(() => {
                     //Perform action in always
                 });
                     
                 
         
                            axios.post('http://localhost:8000/mal/',{"email":this.vaccinateur.email,} )
                                .then((res) => {
                                    //Perform Success Action
                                        
                                      this.valMsg=true
                                    this.msg="Thank you for your answer, please confirm your answer from your mailbox"

                                })
                                .catch((error) => {
                                     this.valMsg=true
                                    this.msg="error"
                                    // error.response.status Check status code
                                }).finally(() => {
                                    //Perform action in always
                                });
 
        }
}

}
</script>
  