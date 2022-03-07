import { toCamel } from './util'

type TObj<T> = { key: string; type: T; }

type Options = {
  name: string;
  props: TObj<string | string[]>[];
  emits: TObj<string>[];
}

const mapping = {
  array: 'any[]',
  object: 'Record<string, any>',
  regexp: 'RegExp',
  date: 'Date',
  function: '(...args: any[]) => any',
  any: 'any'
} as const

function getType (str: string | string[]) {
  const arr = Array.isArray(str) ? str : [str]
  return arr.map(el => {
    const k = el.toLowerCase() as keyof typeof mapping
    return mapping[k] || k
  }).join(' | ')
}

export default function toDts ({ name, props, emits }: Options) {
  const space = (s: string) => s ? ` ${s} ` : ''
  const propsStr = space(props.map(item => `${item.key}: ${getType(item.type)};`).join(' '))
  const emitsStr = emits.length > 0 ? `, { ${space(emits.map(item => `${item.key}: ${item.type};`).join(' '))} }` : ''
  name = toCamel(name)
  return {
    name,
    content: `type T${name} = TComponent<{${propsStr}}${emitsStr}>`
  }
}
