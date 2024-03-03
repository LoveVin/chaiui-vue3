<template>
    <div>
        <article class="markdown-body" v-html="content">
        </article>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    content: string
}>()
</script>