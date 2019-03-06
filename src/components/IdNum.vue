<template>
    <div class="box">
        <el-input placeholder="请输入身份证号码" v-model="idNum" clearable maxlength="18" minlength="18"></el-input>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class IdNum extends Vue {
        private idNum: string = '';
    }
</script>


<style lang="scss" scoped>
    .box {
        width: 250px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
</style>

