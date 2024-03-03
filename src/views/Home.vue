<template>
    <div class="home">
        <TopNav />
        <div class="banner">
            <h1>ChaiUI-Vue3</h1>
            <h2>一个正在孵化中的 UI 库</h2>
            <p class="actions">
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
        <ul class="features">
            <li>
                <div class="feature-item">
                    <img class="feature-image" src="/vite.svg" alt="vite">
                    <h3>基于 Vite</h3>
                    <p>
                        项目构建工具使用了 vue3 官网推荐的 vite，极大地改善了开发体验。
                    </p>
                </div>
            </li>
            <li>
                <div class="feature-item">
                    <svg class="icon">
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>
                        使用了 Vue 3 Composition API，在单文件组件中使用 &ltscript setup&gt 编译时组合式 API。
                    </p>
                </div>
            </li>
            <li>
                <div class="feature-item">
                    <svg class="icon">
                        <use xlink:href="#icon-typescript"></use>
                    </svg>
                    <h3>基于 TypeScript</h3>
                    <p>
                        使用 TypeScript 进行类型检查，严格控制代码书写规范。
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import TopNav from '../components/TopNav.vue';
</script>

<style lang="scss" scoped>
.banner {
    background: #f8f6e8;
    background: #fefcee;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #141412;
    // clip-path: ellipse(80% 60% at 50% 40%);

    > h1, h2 {
        margin: 10px 0;
    }

    > .actions {
        padding: 8px 0;

        a {
            display: inline-block;
            margin: 0 8px;
            padding: 8px 24px;
            background: #996f2a;
            color: white;
        }
    }
}

.features {
    margin: 24px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 24px 24px;
    max-width: 1152px;

    @media (min-width: 960px) {
        padding: 0 64px;
    }

    @media (min-width: 640px) {
        padding: 0 48px;
        margin: 48px auto;
    }

    li {
        width: 100%;
        padding: 8px;

        @media ((min-width: 640px)) {
            width: calc(100% / 2)
        }
        @media (min-width: 768px) {
            width: calc(100% / 3)
        }

        .feature-item {
            background: #e6ca5f;
            background: #ffefb2;
            border-radius: 12px;
            padding: 24px;
            color: #141412;
            height: 100%;

            .feature-image {
                width: 36px;
                height: 36px;
                margin-bottom: 20px;
            }
    
            .icon {
                width: 48px;
                height: 48px;
                margin-bottom: 20px;
            }
    
            h3 {
                font-size: 16px;
                line-height: 24px;
                font-weight: 600;
            }
    
            p {
                font-size: 14px;
                padding-top: 8px;
                line-height: 24px;
            }
        }
    }
}
</style>
