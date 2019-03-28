<template>
	<div class="betting-activiry-container">
		<div class="betting-activiry">
			<div class="betting-activiry__item">
		  		<span class="betting-activiry__item_name">已完成：</span>
		  		<span class="betting-activiry__item_detaile">任务等级 -1/ 投注目标 （三）</span>
		  	</div>
		  	<div class="betting-activiry__item">
		  		<span class="betting-activiry__item_name">可获得奖励：</span>
		  		<span class="betting-activiry__item_detaile">等级奖励<em>88.00</em>元,额外奖励<em>200.00</em>元,共计<em>288.00</em>元
		  		</span>
		  	</div>
		  	<div class="betting-activiry__item">
		  		<span class="betting-activiry__item_name">下一个阶段可获得奖励：</span>
		  		<span class="betting-activiry__item_detaile">等级奖励<em>188.00</em>元,额外奖励<em>300.00</em>元
		  		</span>
		  	</div>
		</div>
		<div class="dialog-btn">
		    <el-button class="dialog-btn__btn" type="primary" @click="close">继续挑战</el-button>
		    <el-button class="dialog-btn__btn" @click="receive">立即领奖</el-button>
		 </div>
	 </div>
</template>

<script>
	export default {
		name: 'betting-activiry',
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
			},
			close () {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@include b(betting-activiry) {
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
		@include e(btn) {
			width:100%;
			margin:0;
			&:first-child{
				margin-bottom:20px;
			}
		}
	}
</style>