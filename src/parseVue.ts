import * as fs from 'fs-extra'
import traverse, { Node } from '@babel/traverse'
import * as t from '@babel/types'
import * as parser from '@babel/parser'
import { parseComponent } from 'vue-template-compiler'
import { deduplication, toCamel } from './util'

type MyNode = Node & { value: MyNode; key: MyNode; name: string }
type TObj<T> = { key: string; type: T }

function getVueProps (node: Node): TObj<string | string[]>[] {
  const nodeValue = (node as any).value as MyNode

  /**
   * {
   *   props: ['a', 'b']
   * }
   */
  if (t.isArrayExpression(nodeValue)) {
    return nodeValue.elements.map(el => ({ key: (el as any).value, type: 'any' }))
  }

  if (t.isObjectExpression(nodeValue)) {
    return nodeValue.properties.map(el => {
      const n = el as MyNode
      if (t.isIdentifier(n.value)) {
        return { key: n.key.name, type: n.value.name }
      }

      if (t.isObjectExpression(n.value)) {
        const d = n.value.properties.find(e => (e as MyNode).key.name === 'type') as MyNode
        let type: string | string[]

        /**
         * {
         *   props: {
         *     a : { type: [String, Number] }
         *   }
         * }
         */
        if (t.isArrayExpression(d.value)) {
          type = d.value.elements.map(el => (el as any).name)
        } else {
          /**
           * {
           *   props: {
           *     a : { type: String }
           *   }
           * }
           */
          type = (d as MyNode).value.name
        }
        return { key: n.key.name, type }
      }
      return null
    }).filter(Boolean) as TObj<string>[]
  }
  return []
}

function getVueEmits (node: Node): TObj<string>[] {
  const nodeValue = (node as any).value as MyNode
  const getParmas = (params: any) => params.map((e: any) => `${e.name}: any`).join(', ')
  const isIgnore = (name: string) => name.startsWith('update:')

  /**
   * {
   *   emits: ['a', 'b']
   * }
   */
  if (t.isArrayExpression(nodeValue)) {
    return nodeValue.elements.map(el => {
      const k = (el as any).value
      if (k) return null
      return { key: k, type: '(...args: any[]) => any' }
    }).filter(Boolean) as TObj<string>[]
  }

  if (t.isObjectExpression(nodeValue)) {
    return nodeValue.properties.map(el => {
      const n = el as MyNode

      if (isIgnore(n.key.name)) return null

      /**
       * {
       *   emits: {
       *     click() {}
       *   }
       * }
       */
      if (t.isObjectMethod(n)) {
        const p = getParmas(n.params)
        return { key: n.key.name, type: `(${p}) => void` }
      }

      /**
       * {
       *   emits: {
       *     click: () => {}
       *   }
       * }
       */
      if (t.isObjectProperty(n) && t.isArrowFunctionExpression(n.value)) {
        const p = getParmas(n.value.params)
        return { key: n.key.name, type: `(${p}) => void` }
      }
      return null
    }).filter(Boolean) as TObj<string>[]
  }
  return []
}

export default async function parseVue (filepath: string) {
  const code = await fs.readFile(filepath, 'utf-8')
  const output = parseComponent(code, { pad: 'line' })
  const ast = parser.parse(output.script!.content, {
    sourceType: 'module'
  })

  let name = ''
  const props: TObj<string | string[]>[] = []
  const emits: TObj<string>[] = []

  traverse(ast, {
    ObjectProperty (path) {
      if (path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.isExportDefaultDeclaration()) {
        const node = path.node as any

        switch (node.key.name) {
          case 'name':
            name = toCamel(node.value.value)
            break
          case 'props':
            props.push(...getVueProps(path.node))
            break
          case 'emits':
            emits.push(...getVueEmits(path.node))
            break
          default:
        }
      }
    }
  })
  return { name, props: deduplication(props, 'key'), emits: deduplication(emits, 'key') }
}
