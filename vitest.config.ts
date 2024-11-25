import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    coverage:{
      include:['lib/*'],
      exclude:['/**/*/index.ts']
    }
  }
})
