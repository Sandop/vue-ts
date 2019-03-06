<template>
  	<div class="upload">
		<h1>{{ msg }}</h1>
		<el-upload
	action="https://jsonplaceholder.typicode.com/posts/"
	list-type="picture-card"
	:on-preview="handlePictureCardPreview"
	:on-remove="handleRemove">
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
  	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UploadImg extends Vue {
	@Prop() private msg!: string;

	// data
	private dialogImageUrl: string = '';
	private	dialogVisible: boolean = false;

	// methods
	private handleRemove(file: any, fileList: any): void {
        // console.log(file, fileList);
	}
	private handlePictureCardPreview(file: any) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
