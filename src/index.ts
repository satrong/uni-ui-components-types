import { resolve, join } from 'path'
import * as fs from 'fs-extra'
import parseVue from './parseVue'
import toDts from './toDts'
import { baseTpl, declareModuleTpl } from './tpl'

async function bootstrap () {
  const baseDir = resolve('node_modules/@dcloudio/uni-ui/lib')
  const dirs = await fs.readdir(baseDir)
  const componentOption = []
  const declareModule = []
  for (const item of dirs) {
    const filepath = join(baseDir, item, item + '.vue')
    if (await fs.pathExists(filepath)) {
      const opt = await parseVue(filepath)
      if (!opt.name) opt.name = item
      const d = toDts(opt)
      componentOption.push(d.content)
      declareModule.push(`    ${d.name}: T${d.name};`)
    }
  }

  const result = [baseTpl, componentOption.join('\n\n'), declareModuleTpl(declareModule.join('\n'))].join('\n\n')
  await fs.writeFile(resolve('./index.d.ts'), result, 'utf8')
}

bootstrap()
