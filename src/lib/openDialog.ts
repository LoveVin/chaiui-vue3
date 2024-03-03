import Dialog from "./Dialog.vue";
import { VNode, createApp, h } from "vue";

interface Options {
    title: String | VNode;
    content: String | VNode;
    ok: Function;
    cancel: (...args: any[]) => any
}

export const openDialog = (options: Options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement("div");
    document.body.appendChild(div);

    const close = () => {
        app.unmount();
        div.remove();
    };

    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible: boolean) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    ok, 
                    onCancel: cancel
                },
                {
                    title: () => title,
                    default: () => content
                }
            );
        },
    });
    app.mount(div);
}