<template>
	<div class="prefer">
		<a class="rowtit" href="/Partners/xk.aspx">
			<b class="name">喵客特惠<i>福利</i></b>
			<span>新客注册送960元投资礼包 &gt;</span>
		</a>
		<ul class="newguestlist">
			<li v-for="(item,index) in project" :key="index">
				<a :href="item.href">
					<h6>{{item.name}}</h6>

					<div class="con">
						<div class="row">
							<p class="org"><b>{{item.int}}</b>.{{item.dec}}%</p>
							<p class="org">{{item.star}}元</p>
						</div>

						<div class="row">
							<p>目标收益<s class="org">{{item.target}}%</s></p>
							<p>起投金额</p>

						</div>

					</div>

				</a>
			</li>

		</ul>
	</div>
</template>

<script>
	export default {
		name: "prefer",
		data() {
			return {
				project: [{
						name: '新客专享30天',
						int: '8',
						dec: '50',
						star: '1000',
						target: '3.50',
						href: '/ProjectSet/28'
					},
					{
						name: '新客专享180天',
						int: '12',
						dec: '50',
						star: '1000',
						target: '11.00',
						href: '/ProjectSet/26'
					},
				]
			}
		},

	}
</script>

<style>
	.prefer{
		margin-bottom: 10px;
	}
	.rowtit {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
	}

	.rowtit .name {
		font-size: 16px;
		color: #444444;
	}

	.rowtit i {
		display: inline-block;
		font-size: 12px;
		color: #fff;
		padding: 3px 6px;
		margin-left: 10px;
		background: #fb3c19;
		border-radius: 50px;
	}

	.rowtit span {
		color: #999;
	}

	.newguestlist {
		display: flex;
		justify-content: space-between;
		text-align: center;
		flex-direction: row;
		padding: 10px 10px;
		background: #fff;
	}

	.newguestlist li {
		flex: 1;
		box-sizing: border-box;
		padding: 10px;
		border: solid 1px #efeff4;
		margin-right: 10px;
	}

	.newguestlist li:last-of-type {
		margin-right: 0;
	}

	.newguestlist li h6 {
		font-size: 14px;
		color: #333333;
		text-align: left;
		margin-bottom: 10px;
	}

	.newguestlist li .row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		color: #888888;
	}

	.newguestlist li p {
		font-size: 12px;
	}

	.newguestlist li p.org {
		font-size: 18px;
	}

	.newguestlist li p b {
		font-size: 30px;
	}

	.newguestlist li p s {
		margin-left: 4px;
	}
</style>
