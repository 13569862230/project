<template>
	<ul class="navbar">
		<li v-for="(item,index) in navs" :class="{active:index==ins}" @click="active(index)" :key="index">
			<router-link :to="{path:'/'+item.path}">
				<i class="iconfont" :class="item.class"></i>
				<span>{{item.name}}</span>
			</router-link>
		</li>
		
	</ul>
</template>

<script>
	export default {
		name: "Slider",
		data() {
			return {
				ins: 0,
				navs: [{
						name: '首页',
						path: '',
						class:'icon-home',
						img: 'http://m.58cm.com/Styles/images/sy/botnavpic1-b.png'
					},
					{
						name: '投资',
						path: 'invest',
						class:'icon-purse',
						img: 'http://m.58cm.com/Styles/images/sy/botnavpic2-b.png'
					},
					{
						name: '发现',
						path: 'find',
						class:'icon-find',
						img: 'http://m.58cm.com/Styles/images/sy/botnavpic3-b.png'
					},
					{
						name: '账户',
						path: 'user',
						class:'icon-user',
						img: 'http://m.58cm.com/Styles/images/sy/botnavpic4-b.png'
					},
				],

			}
		},
		methods: {
			active: function(index) {
				this.ins = index
			}
		}
	}
</script>

<style>
	.navbar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		background: #fff;
		border-top: solid 1px #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 2;
	}
	.navbar li {
		flex: 1;
	}
	.navbar li a {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 5px 0;
		color: #333;
		font-size: 15px;
	}
	.navbar .active a {
		color: #ff532c;
	}
	.navbar a i {
		font-size: 30px;
		margin-bottom: 5px;
	}
</style>
