<template>
    <el-select v-model="selectValue" clearable placeholder="请选择上传内容">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class Select extends Vue {
        public options: any[] = [{
            value: '选项1',
            label: '身份证正面',
            }, {
            value: '选项2',
            label: '身份证反面',
            }, {
            value: '选项3',
            label: '手持身份证',
            }, {
            value: '选项4',
            label: '手持合同',
            },
        ];
        public selectValue: string = '';
    }
</script>
