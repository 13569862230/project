<template>
	<div class="swiper-container">
		<div class="tit_bt">
			<b>快乐投</b>
			<a href="/activity/comeon/comeon.aspx"><span>
					投资送加油卡 &gt;</span></a>
		</div>
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(slide, index) in swiperSlides" :key="index">
				<product></product>

			</div>
		</div>
		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

	</div>
</template>

<script>
	import Swiper from 'swiper';
	import product from './product';
	export default {
		name: "Slider",
		components: {
			product
		},
		data() {
			return {
				swiperSlides: [{
						swiperimg: 'https://image.58cm.com/201905/2019052714-3439-93567.jpg',
						imghref: 'http://m.58cm.com/activity/old_customers/old_customers.aspx'
					},
					{
						swiperimg: 'https://image.58cm.com/201906/2019061410-3322-75832.jpg',
						imghref: 'https://m.58cm.com/activity/comeon/comeon.aspx'
					},
				],

			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				loop: true, // 循环模式选项

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
		}
	}
</script>

<style scoped>
	.swiper-slide img {
		display: block;
		width: 100%;
	}
</style>
