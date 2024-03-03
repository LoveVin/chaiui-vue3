<demo>基础用法</demo>

<template>
    <div>
        <Button @click="toggle">点击打开 Dialog</Button>
        <Dialog title="提示" v-model:visible="visible" @cancel="cancel" :ok="ok">
            <div>是弹窗里面的内容</div>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false)

const toggle = () => {
    visible.value = !visible.value
}

const cancel = () => {
    console.log("点击了取消")
}

const ok = () => {
    console.log("点击了确定")
    return true
}
</script>