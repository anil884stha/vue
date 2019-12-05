<template>
	<div id="app">
		<h1>Api call Vue </h1>
		<input type="text" v-model="search" name="" placeholder="Search"><br><br>
		
		<div v-for="post in filters" v-bind:key="post.id" class="box">
			<p>	title: {{ post.title | to-lowercase }}<br>
				body: {{ post.body | to-lowercase }}
			</p>

		</div>
		
<!-- 		<h2>Hello and show</h2>
		<p>name</p>
		<p>hello</p>
		<p>come</p> -->

		<!-- <ul>
			<li v-for="post in posts" v-bind:key="post.title" >
				<p> {{ post.title }} </p>
			</li>
		</ul> -->
		<!-- <div type="box" v-for="posts" >{{ posts }}</div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
			search:'',	
		}
	},
	methods:{
		apiCall(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				this.posts = response.data;
			})
		}
	},
	mounted(){
		this.apiCall()
	},
	computed: {
		filters(){
			return this.posts.filter((post) => {
				return post.title.includes(this.search) || 
				post.body.includes(this.search);
			});
		}
	}
};

</script>
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
.container {
	max-width: 980px;
	margin: 20px auto;
	@media screen and (max-width: 1050px) { 
		width: 95%; 
	}
}
input{
	width: calc(100% - 30px);
	border: 1px;
	border-color: black;
	padding: 10px;
	font-size: 12px;
	background-color: ;
	color: #687F7F;
}
.posts {
	list-style: none;
	text-align: left;
}

.post-item{
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}
table,
th{
	border: 1px solid #cccccc;
	border-collapse: collapse;
}
td {
	border: 1px solid #cccccc;
	border-collapse: collapse;
}
.box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: $material-shadow;
	min-height: 150px;
	border-radius: 5px;
	background-color: white;
	margin-bottom: 10px;
	&__subtitle { 
		color: lighten(grey, 15%); 
	}
	&__empty {
		background-color: transparent; box-shadow: none 
	}
	&:hover { cursor: pointer; }
}

</style>