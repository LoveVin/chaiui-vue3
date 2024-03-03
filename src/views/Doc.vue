<template>
    <div class="layout">
        <TopNav :toggle-menu-visible="true" class="layout-nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <h3>开发指南</h3>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">快速开始</router-link>
                    </li>
                </ol>
                <h3>组件</h3>
                <ol>
                    <li>
                        <router-link to="/doc/button">
                            Button 按钮
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">
                            Switch 开关
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">
                            Dialog 弹窗
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">
                            Tabs 标签页
                        </router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { AsideVisibleObj } from "../types";
import TopNav from '../components/TopNav.vue';

const { asideVisible } = inject<AsideVisibleObj>("asideVisibleObj")!
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .layout-nav {
    flex-shrink: 0;
  }
}

.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 210px;

    @media (max-width: 500px) {
      padding-left: 0; 
    }
    
    display: flex;

    > aside {
        flex-shrink: 0;
    }

    > main {
        flex-grow: 1;
        padding: 16px;
        overflow: auto;
    }
}

aside {
    background: #f8f6e8;
    background: #fefcee;
    width: 200px;
    padding: 16px 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    padding-top: 70px;
    padding-left: 32px;
    height: 100%;
    color: #141412;

    >h3 {
        padding: 8px 16px;
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }

    >ol {
        >li {
            font-size: 16px;
            color: #444;
            a {
                display: block;
                padding: 4px 16px;

                &.router-link-active {
                    color: #986f2a;
                }
            }
        }
    }
}
</style>
