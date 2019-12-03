  <template>
    <div class="hello">
      <div class="holder">
        <form @submit.prevent="addSkill">
          <validation-provider rules="required" v-slot="{ errors }">
            <input type="text" placeholder="Enter your Skill..." v-model="skill" vee-validate="'min:5'" name="skill">

          </validation-provider>
        </form>
        <ul>
          <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}</li>
        </ul>
        <p>These are the skills that you possess</p>
      </div>
    </div>
  </template>

  <script>
  import { ValidationProvider } from 'vee-validate';

  export default { 
    name: 'Skills',
    components: {
      ValidationProvider
    },
    data() {
      return {
        skill:'',
        skills: [ 
        { "skill": "Helllo"},
        { "skill": "Hello Again"}
        ]
      };
    },
    methods: {
      addSkill(){
        this.$validator.validateAll().then((result) =>  {
          if (result) {
            this.skills.push({skill: this.skill})
            this.skill = '';
          }else{
            // console.log('Not valid');
          }
        })
      }
    }
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style  scoped>
  .holder{
    background-color: #fff;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li{
    padding: 20px;
    font-style: 1.3em;
    background-color: #E0EDF4;
    border-left: 50px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p{
    text-align: center;
    padding: 30px 0;
    color: gray;
  }
  .container{
    box-shadow: 0px 0px 40px lightgray;
  }
  input{
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  </style>
