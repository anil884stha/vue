  <template>
    <div class="hello">
      <div class="holder">
        <form @submit.prevent="addSkill">
          <!-- <transition name="alert-in"> -->
            <input type="text" placeholder="Enter Anything !!!!" v-model="skill">
            <!-- </transition> -->
          </form>
          <ul>
            <transition-group name="alert-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li v-for="(data, index) in skills" :key='index'>
                {{ data.skill }}
                <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>

              </li>
            </transition-group>
          </ul>
          <p>These are anything you have written!!!!</p>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'Skills',
      data() {
        return {
          skill:'',
          skills: [ 
          { "skill": "Helllo"},
          { "skill": "Hello Again"}
          ]
        };
      },
      methods:{
        addSkill(){
          this.skills.push({skill: this.skill})
          this.skill = '';
        },
        remove(id) {
          this.skills.splice(id,1);
        }
      },
      
    };
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style  scoped>
    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

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
    .alert{
      background: #fdf2ce;
      font-weight: bold;
      display: inline-block;
      padding: 5px;
      margin-top: -20px;
    }
    .alert-in-enter-active{
      animation: bounce-in .5s;
    }
    .alert-in-leave-active{
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in{
      0%{
        transform: scale(0);
      }
      50%{
        transform: scale(1.5);
      }
      100%{
        transform: scale(1);
      }
    }
    i{
      float: right;
      cursor:pointer;
    }
    </style>
