<template>
	<div class="home">
		<IdNum/>
		<Select/>
		<UploadImg msg="请选择照片"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UploadImg from '@/components/UploadImg.vue';
import Select from '@/components/Select.vue';
import IdNum from '@/components/IdNum.vue';

@Component({
	components: {
		UploadImg,
		Select,
		IdNum,
	},
})
export default class Home extends Vue {

}
</script>
