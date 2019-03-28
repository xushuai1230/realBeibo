<template>
	<div class="renew-activiry-container">
		<div class="renew-activiry">
			<div class="renew-activiry__item">
		  		<span class="renew-activiry__item_name">已完成：</span>
		  		<span class="renew-activiry__item_detaile">续存赠送10%，最高588元的活动条件</span>
		  	</div>
		  	<div class="renew-activiry__item">
		  		<span class="renew-activiry__item_name">可获得奖励：</span>
		  		<span class="renew-activiry__item_detaile">
		  			续存奖励<em>500.00</em>元
		  		</span>
		  	</div>
		</div>
		<div class="dialog-btn">
		    <el-button class="dialog-btn__confirm" type="primary" @click="close">确定</el-button>
		 </div>
	 </div>
</template>

<script>
	export default {
		name: 'renew-activiry',
		props: [],
		data () {
			return {

			}
		},
		methods: {
			close () {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include b(renew-activiry) {
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
	}
	@include b(dialog-btn) {
		text-align:center;
		@include e(confirm) {
			width:187px;
		}
	}
</style>