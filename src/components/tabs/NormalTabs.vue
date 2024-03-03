<demo>基础用法</demo>

<template>
    <div>
        <Tabs v-model:selected="selected">
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航2">内容2</Tab>
        </Tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const selected = ref("导航1")
</script>