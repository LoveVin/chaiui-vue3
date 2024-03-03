<demo>基础用法</demo>

<template>
    <div>
        <Switch v-model:value="checked" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(false)
</script>