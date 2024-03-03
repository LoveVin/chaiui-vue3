<template>
    <div class="cu-switch">
        <button @click="toggle" :class="{ 'cu-checked': model }">
            <span></span>
        </button>
    </div>
</template>

<script setup lang="ts">

const model = defineModel()

const toggle = () => {
    model.value = !model.value
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.cu-switch {
    button {
        position: relative;
        height: $h;
        width: $h * 2;
        border: none;
        background: #bfbfbf;
        border-radius: calc($h / 2); 

        @media (min-width: 960px) {
            cursor: pointer; 
        }
    
        span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: calc($h / 2);
            transition: all 250ms;
        }
    
        &.cu-checked {
            background: #1890ff;
            
            span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
    
        &.cu-checked:active {
            > span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }
    
        &:active {
            > span {
                width: $h2 + 4px;
            }
        }
    
        &:focus {
            outline: none;
        }
    }
}
</style>