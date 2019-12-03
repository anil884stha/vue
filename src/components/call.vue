<template>
	<div class="about">
		<h1></h1>
		<p>Api call Vue </p>
	</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
     theirName: this.$route.params.name 
   };
 },
};
</script>