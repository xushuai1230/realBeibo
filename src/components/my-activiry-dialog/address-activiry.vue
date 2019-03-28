<template>
	<div class="address-activiry-container">
		<div class="address-activiry">
			<div class="address-activiry__item">
		  		<span class="address-activiry__item_name">已完成：</span>
		  		<div class="address-activiry__item_detaile">单笔充值及有效流水的活动要求</div>
		  	</div>
		  	<div class="address-activiry__item">
		  		<span class="address-activiry__item_name">可获得奖励：</span>
		  		<div class="address-activiry__item_detaile">
		  			专属打火机一个
		  		</div>
		  	</div>
		  	<div class="address-activiry__item">
		  		<span class="address-activiry__item_name">可获得奖励：</span>
		  		<div class="address-activiry__item_detaile">
		  			<ul class="address-activiry__item_address">
		  				<li>姓名：王乐</li>
		  				<li>手机号码：176****4781</li>
		  				<li>详细地址：广东省深圳市福田区深南大道友谊商店3楼6666-88号</li>
		  			</ul>
		  			<p class="address-activiry__item_address_link">
		  				ps:若要更改收货地址，请前往"
		  				<router-link to="/user/info">个人中心-个人资料-个人地址</router-link>
		  				"处进行修改
		  			</p>
		  		</div>
		  	</div>
		</div>
		<div class="dialog-btn">
		    <el-button class="dialog-btn__btn" type="primary" @click="receive">立即领奖</el-button>
		 </div>
	 </div>
</template>

<script>
	export default {
		name: 'address-activiry',
		props: [],
		data () {
			return {

			}
		},
		methods: {
			receive() {
				this.$confirm('<span style="color:#000000;">还未达到活动领取条件，达标后按钮会变成更可领取状态 请完成活动领取条件，在进行领取</span>', '领取奖励', {
					type: 'warning',
					closeBtnHtml:false,
					dangerouslyUseHTMLString:true
				}).then(() => {

				}).catch(() => {
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	$--color-gray-9: #ADADAD !default;

	@include b(address-activiry) {
		@include e(item) {
			margin-bottom:40px;
		}
		@include e(item_name) {
			display:block;
			font-size:$--font-size-base;
			font-weight:bold;
			color:$--color-black;
			margin-bottom:10px;
		}
		@include e(item_detaile) {
			font-size:$--font-size-base;
			color:$--color-black;
			em{
				font-style:normal;
				color:$--color-primary;
				padding:0 3px;
			}
		}
		@include e(item_address) {
			list-style:none;
			margin:0;
			padding:0;
			font-size:$--font-size-small;
			color:$--color-gray-9;
			padding:16px 0;
			background:$--background-gray-1;
		}
		@include e(item_address_link) {
			font-size:$--font-size-small;		
			color:$--color-gray-9;
		}
	}
	@include b(dialog-btn) {
		text-align:center;	
		@include e(btn) {
			width:187px;
		}
	}
</style>