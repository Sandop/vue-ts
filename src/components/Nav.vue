<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/about">About</router-link></el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {

        // data
        public activeIndex: string = '1';
        public activeIndex2: string = '1';
    }

</script>

<style lang="scss" scoped>
    ul.el-menu-demo.el-menu--horizontal.el-menu {
        display: flex;
        justify-content: center;

        li a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    
</style>
