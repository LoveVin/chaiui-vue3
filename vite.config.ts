import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

const customBlockPlugin = {
  name: 'custom-block',
  transform(code, id) {
    if (!/vue&type=demo/.test(id)) {
      return
    }
    const filePath = id.split("?")[0];
    const file = fs.readFileSync(filePath).toString();
    const parsed = baseParse(file).children.find(n => n.tag === 'demo');
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()
    return `export default Comp => {
      Comp.__sourceCode = ${
      JSON.stringify(main)
      }
      Comp.__sourceCodeTitle = ${JSON.stringify(title)}
    }`
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), customBlockPlugin, md()],
})