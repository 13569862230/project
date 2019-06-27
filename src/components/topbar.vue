<template>
	<div class="topbar">
		<img src="http://m.58cm.com/Styles/images/logo_new.png" alt="">
		<span>
			<a href="">登录</a> |
			<a href="">注册</a>
		</span>
	</div>
</template>

<script>
	export default {
		name: "topbar",

	}
</script>

<style>
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px;
		color: #fff;
		background: #ff532c;
	}

	.topbar a {
		color: #fff;
		text-decoration: none;
	}

	.topbar img {
		display: block;
		height: 30px;
	}
</style>
