import { readdirSync, writeFileSync, mkdirSync } from 'node:fs'

const modules = readdirSync('lib').filter(name=> !['algorithms', 'interface', 'index.ts', 'util'].includes(name))

for(const module of modules) {
  const dataStructs = readdirSync(`lib/${module}`)
    .filter(name=>!['__tests__', 'index.ts', 'types'].includes(name))
    .map(name=>name.split('.')[0])

  for(const ds of dataStructs) {
    writeFileSync(`lib/${module}/__tests__/${ds}.spec.ts`, `import { describe, it, expect } from 'vitest'\r\nimport ${ds.at(0).toUpperCase()+ds.slice(1)} from '../${ds}'\r\n`)

  }

}


