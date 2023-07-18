<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <router-link to="/login">Login</router-link> -->
		<router-view></router-view>
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		// HelloWorld,
	},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/* Navbar styles */
.navbar {
	background-color: #f8f9fa;
	padding: 0.5rem;
}

.navbar-nav {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

.nav-item {
	margin-right: 1rem;
}

.nav-link {
	color: #333;
	text-decoration: none;
	transition: color 0.2s;
}

.nav-link:hover {
	color: #007bff;
}

/* Dropdown menu styles */
.dropdown {
	position: relative;
}

.dropdown-toggle::after {
	content: "\25be";
	margin-left: 0.5rem;
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	right: 0;
	min-width: 10rem;
	background-color: #fff;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	padding: 0.5rem 0;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dropdown-item {
	display: block;
	width: 100%;
	padding: 0.5rem 1rem;
	clear: both;
	color: #333;
	text-decoration: none;
	transition: background-color 0.2s;
}

.dropdown-item:hover,
.dropdown-item:focus {
	background-color: #f8f9fa;
}
</style>
