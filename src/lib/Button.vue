<template>
    <button class="cu-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="cu-loadingIndicator"></span>
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String
    },
    size: {
        type: String
    },
    level: {
        type: String
    },
    disabled: {
        type: Boolean
    },
    loading: {
        type: Boolean
    }
})

const classes = computed(() => {
    return {
        [`cu-type-${props.type}`]: props.type,
        [`cu-size-${props.size}`]: props.size,
        [`cu-level-${props.level}`]: props.level,
    }
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.cu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.cu-type-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }

        &.cu-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.cu-type-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
            ;
        }

        &.cu-level-primary {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.cu-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.cu-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px
    }

    &.cu-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.cu-level-primary:not(.cu-type-link, .cu-type-text) {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
            background: darken($blue, 10%);
            border-color: darken($blue, 10%);
        }
    }

    &.cu-level-danger:not(.cu-type-link, .cu-type-text) {
        background: $red;
        border-color: $red;
        color: white;

        &:hover,
        &:focus {
            background: darken($red, 10%);
            border-color: darken($red, 10%);
        }
    }

    &[disabled]:not(.cu-type-link, .cu-type-text) {
        cursor: not-allowed;
        color: $grey;

        &:hover {
            border-color: $grey;
        }
    }

    &.cu-type-link,
    &.cu-type-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    @keyframes cu-spin {
        0% {
            transform: rotate(0deg)
        }

        100% {
            transform: rotate(360deg)
        }
    }

    .cu-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: cu-spin 1s infinite linear;
    }
}</style>