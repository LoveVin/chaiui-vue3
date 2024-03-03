import { createWebHashHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/switch/index.vue'
import ButtonDemo from '../components/button/index.vue'
import DialogDemo from '../components/dialog/index.vue'
import TabsDemo from '../components/tabs/index.vue'
import Markdown from '../components/Markdown.vue'
import Intro from '../markdown/intro.md'
import Install from '../markdown/install.md'
import GetStarted from '../markdown/get-started.md'
import { h } from 'vue'

const md = (fileStr: string) => {
    return h(Markdown, {
        content: fileStr,
        key: fileStr
    })
}

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/doc",
        redirect: "/doc/intro",
        component: Doc,
        children: [
            {
                path: "intro",
                component: md(Intro)
            },
            {
                path: "install",
                component: md(Install)
            },
            {
                path: "get-started",
                component: md(GetStarted)
            },
            {
                path: "switch",
                component: SwitchDemo
            },
            {
                path: "button",
                component: ButtonDemo
            },
            {
                path: "dialog",
                component: DialogDemo
            },
            {
                path: "tabs",
                component: TabsDemo
            }
        ]
    }
]

const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes,
})