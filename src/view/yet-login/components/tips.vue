<template>
    <div class="tips">
        <el-warning><slot></slot></el-warning>
    </div>
</template>

<script>
    export default {
      name:'tips'
    }
</script>

<style lang="scss" scoped>
.tips {
	display:flex;
	align-content:center;
}
</style>
