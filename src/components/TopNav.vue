<template>
    <div class="topnav">
        <span v-if="toggleMenuVisible" class="toggleAside" @click="toggleAsideVisible">
            <svg class="icon">
                <use xlink:href="#icon-toggle"></use>
            </svg>
        </span>
        <div class="logo">
            <router-link to="/">
                <img src="/logo.png" alt="logo"> 
                <span>ChaiUI-Vue3</span>
            </router-link>
        </div>
        <ul class="menu">
            <li>
                <a href="https://github.com/" target="_blank">github</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { AsideVisibleObj  } from '../types/index'

const { toggleAsideVisible } = inject<AsideVisibleObj>("asideVisibleObj")!

withDefaults(defineProps<{
    toggleMenuVisible?: boolean
}>(), {
    toggleMenuVisible: false
})
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    background: #fefcee;

    > .logo {
        // max-width: 6em;
        margin-right: auto;
        // white-space: nowrap;

        a {
            display: flex;
            align-items: center;
            color: #654715;
            cursor: pointer;
            
            img {
                width: 40px;
                margin-right: 4px;
            }
        }

    }

    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        > li {
            margin: 0 1em;
        }
    }

    > .toggleAside {
        display: none;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);

        .icon {
            width: 1.7em;
            height: 1.7em;
        }
    }

    @media (max-width: 500px) {
        > .logo {
            margin: 0 auto;
        }

        > .menu {
            display: none;
        }

        > .toggleAside {
            display: inline-block;
        }
    }
}
</style>
