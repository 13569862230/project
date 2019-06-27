<template>
	<div class="entrance">
		<a v-for="(item,index) in entra" :key="index" href="">
			<span>
				<b>{{item.b}}</b>
				<p>{{item.p}}</p>
			</span>
			<img :src="item.src">
		</a>
	</div>
</template>

<script>
	export default {
		name: "entrance",
		data() {
			return {
				entra: [{
						b: '快乐投',
						p: '投资送加油卡',
						src:'http://m.58cm.com/Styles/images/sy/entrance1.png'
					},
					{
						b: '备案详情',
						p: '圆满自查“三证”齐全',
						src:'http://m.58cm.com/Styles/images/sy/entrance2.png'
					},
				]
			}
		},

	}
</script>

<style>
	.entrance {
		display: flex;
		padding: 20px 0;
		margin: 10px auto;
		background: #fff;
	}
	.entrance a {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.entrance a span{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		text-align: center;
		color: #222;
	}
	.entrance a:nth-child(1) {
		border-right: solid 1px #ccc;
	}
	.entrance a b {
		font-size: 15px;
		margin-bottom: 5px;
	}
	.entrance a p {
		font-size: 12px;
		color: #716f70;
	}
	.entrance a img {
		width: 20%;
	}
</style>
