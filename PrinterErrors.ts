export function printerError(s: string): string {
    const matches = s.match(/[^a-m]/g);
    // const matches = s.match(pattern)
    return `${Array.isArray(matches) ? matches.length : undefined}/${s.length}`

}

console.log(printerError('bileeeffaecldmdijlglbcmb'))
console.log('bfhgihgebgkjjhldficjlihdhidgfcjlglmcdhjikclhem'.match(/[^a-m]/g))