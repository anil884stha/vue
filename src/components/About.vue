<template>
	<div class="about">
		<h1>Hello {{ their_name }}, Welcome To About Page</h1>
		<p>About Vue </p>
	</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
     their_name: this.$route.params.name 
   };
 },

};
</script>