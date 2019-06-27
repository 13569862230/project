<template>
	<div class="home">
		<banner />
		<entrance></entrance>
		<preferen></preferen>
		<happyThrow></happyThrow>
		<product></product>
	</div>
</template>

<script>
	import banner from '@/components/banner'
	import entrance from '../components/entrance';
	import preferen from '../components/preferen';
	import happyThrow from '../components/happyThrow';
	import product from '../components/product';

	export default {
		name: 'home',
		components: {
			banner,
			entrance,
			preferen,
			happyThrow,
			product
		}
	}
</script>

<style scoped="">
	.home{
		background: #ebebeb;
		padding-bottom: 61px;
	}
</style>