<demo>API打开弹窗</demo>

<template>
    <div>
        <Button @click="open">打开弹窗</Button>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { openDialog } from '../../lib/openDialog';
const open = () => {
    openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
            console.log('ok')
            return true
        },
        cancel() {
            console.log('cancel')
        }
    })
}
</script>