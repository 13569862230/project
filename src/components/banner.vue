<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="(banner, index) in banners" :key="index">
			<a :href="banner.imghref"><img :src="banner.bannerimg"></a>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'

	export default {
		name: 'home',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				banners: [{
						bannerimg: 'https://image.58cm.com/201905/2019052714-3439-93567.jpg',
						imghref: 'http://m.58cm.com/activity/old_customers/old_customers.aspx'
					},
					{
						bannerimg: 'https://image.58cm.com/201906/2019061410-3322-75832.jpg',
						imghref: 'https://m.58cm.com/activity/comeon/comeon.aspx'
					},
				],
				swiperOption: {
					loop: true, // 循环模式选项
					autoplay:true,//自动切换
					pagination: {
						el: '.swiper-pagination' //分页器
					},
					
				}
			}
		}
	}
</script>

<style scoped>
.swiper-slide img{
		display: block;
		width: 100%;
	}
</style>
