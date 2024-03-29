<template>
    <div v-if="visible">
        <Teleport to='body'>
            <div class="cu-dialog-overlay" @click="onClickOverlay"></div>
            <div class="cu-dialog-wrapper">
                <div class="cu-dialog">
                    <header>
                        <div>
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <span class="cu-dialog-close" @click="close"></span>
                    </header>
                    <main>
                        <slot></slot>
                    </main>
                    <footer>
                        <Button @click="ok" level="main">OK</Button>
                        <Button @click="cancel">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue';
const props = defineProps({
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    },
    title: {
        type: String
    },
    ok: {
        type: Function
    }
})

const visible = defineModel('visible', {
    default: false
})

const emit = defineEmits(['cancel'])

const close = () => {
    visible.value = false
}

const onClickOverlay = () => {
    if(props.closeOnClickOverlay) {
        close()
    }
}

const ok = () => {
    if(props.ok?.()) {
        close()
    }
}

const cancel = () => {
    emit('cancel')
    close()
}

</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.cu-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>