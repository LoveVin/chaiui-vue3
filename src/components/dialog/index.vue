<template>
    <div>
        <h1>Dialog 弹窗</h1>
        <Demo :component="NormalDialog"></Demo>
        <Demo :component="SlotDialog"></Demo>
        <Demo :component="APIDialog"></Demo>
    </div>
</template>

<script lang="ts" setup>
import NormalDialog from './NormalDialog.vue';
import SlotDialog from './SlotDialog.vue';
import APIDialog from './APIDialog.vue';
</script>