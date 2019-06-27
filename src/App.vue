<template>
  <div id="app">
    <topbar></topbar>
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
	import navbar from './components/navbar'
	import topbar from './components/topbar'
	export default {
		name: 'App',
		components: {
			topbar,
			navbar
		},
	}
</script>
<style>
	
</style>
