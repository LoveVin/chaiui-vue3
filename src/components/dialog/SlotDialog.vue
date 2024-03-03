<demo>插槽用法</demo>

<template>
    <div>
        <Button @click="toggle">点击打开 Dialog</Button>
        <Dialog v-model:visible="visible">
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
            <strong>hi</strong>
                <div>hi2</div>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false)

const toggle = () => {
    visible.value = !visible.value
}

</script>