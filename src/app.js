import Vue from 'vue';
import router from './router'

window.axios = require('axios');


new Vue({
	el: '#app',

	components:{

	},

	mounted: function(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => console.log(response));
	}

	data:{
	
	}
})