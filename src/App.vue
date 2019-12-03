<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/call">call</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  component: {
    Skills
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body{
  background-color:#EEEEEE;
  font-family: 'Monsterrat','sans-serif';
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html{
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
nav a{
  padding: 10px;
  background: #fff;
  border-radius: 3px;
  color: rbg(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
