export function toCamel (str: string, isUpper = true) {
  return str.split('-').map((s, index) => {
    const firstWord = s.charAt(0)
    return (!isUpper && index === 0 ? firstWord.toLowerCase() : firstWord.toUpperCase()) + s.slice(1)
  }).join('')
}

export function deduplication<T extends Record<string, any>> (arr: T[], key: string) {
  return arr.reduce<T[]>((prev, item) => {
    if (prev.every(el => el[key] !== item[key])) {
      prev.push(item)
    }
    return prev
  }, [] as T[])
}
