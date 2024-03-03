<template>
    <div>
        <h1>Button 按钮 </h1>
        <Demo :component="TypeButton" />
        <Demo :component="SizeButton" />
        <Demo :component="LevelButton" />
        <Demo :component="DisabledButton" />
        <Demo :component="LoadingButton" />
    </div>
</template>
 
<script setup lang="ts">
import TypeButton from './TypeButton.vue';
import SizeButton from './SizeButton.vue';
import LevelButton from './LevelButton.vue';
import DisabledButton from './DisabledButton.vue';
import LoadingButton from './LoadingButton.vue';
</script>

<style lang="scss" scoped>
</style>