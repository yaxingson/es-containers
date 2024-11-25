#!/usr/bin/env node
const { resolve } = require('node:path')
const { readdirSync, statSync } = require('node:fs')
const { rollup, defineConfig } = require('rollup')
const { glob } = require('fast-glob')
const typescript = require('@rollup/plugin-typescript')
const { babel, getBabelOutputPlugin } = require('@rollup/plugin-babel')
const del = require('rollup-plugin-delete')
const terser = require('@rollup/plugin-terser')
const alias = require('@rollup/plugin-alias')
const license = require('rollup-plugin-license')

const licensePlugin = license({
  banner:{
    content:`
    ES-Containers JavaScript Library v0.0.5

    Copyright OpenJS Foundation and other contributors
    Released under the MIT license

    Date: ${new Date().toLocaleString()}
    `,
    commentStyle: 'regular'
  }
})

const modules = readdirSync(resolve(__dirname, '../lib')).filter(path=>{
	return path !== 'types' && statSync(resolve(__dirname, `../lib/${path}`)).isDirectory()
})

async function build(inputOption, outputOptions) {
	try {
		const bundle = await rollup(inputOption)

		outputOptions.forEach(async outputOption=>{
			await bundle.write(outputOption)

		})

		await bundle.close()

	} catch(e) {
		console.error(e)
	}
}

for(const name of modules) {
	const inputOption = {
		input: resolve(__dirname, `../lib/${name}/index.ts`),
		plugins:[
			typescript(),
			alias({
				entries: [
					{ find: 'types', replacement: '../../types' },
				]
			})
		]
	}

	const outputOptions = [
		{
			file:resolve(__dirname, `../dist/${name}/index.js`),
			format:'esm',
      sourcemap:true
		},
		{
			file:resolve(__dirname, `../dist/${name}/index.min.js`),
			format:'esm',
      sourcemap:true,
			plugins:[terser()]
		},
		{
			file:resolve(__dirname, `../dist/${name}/index.cjs`),
			format:'cjs',
      sourcemap:true
		},
		{
			file:resolve(__dirname, `../dist/${name}/index.min.cjs`),
			format:'cjs',
      sourcemap:true,
			plugins:[terser()]
		},
	]

	build(inputOption, outputOptions)
}

const inputOption = {
	input: resolve(__dirname, `../lib/index.ts`),
	plugins:[
		typescript(),
	]
}

const outputOptions = [
	{
		file:resolve(__dirname, `../dist/index.js`),
		format:'esm',
    sourcemap:true,
    plugins:[licensePlugin]
	},
	{
		file:resolve(__dirname, `../dist/index.min.js`),
		format:'esm',
    sourcemap:true,
		plugins:[
      terser(),
      licensePlugin,
    ]
	},
	{
		file:resolve(__dirname, `../dist/index.cjs`),
		format:'cjs',
    sourcemap:true,
    plugins:[licensePlugin]
	},
	{
		file:resolve(__dirname, `../dist/index.min.cjs`),
		format:'cjs',
    sourcemap:true,
		plugins:[terser(), licensePlugin]
	},
	{
		file:resolve(__dirname, `../dist/es-containers.js`),
		format:'umd',
		name:'containers',
    sourcemap:true,
    plugins:[licensePlugin]
	},
	{
		file:resolve(__dirname, `../dist/es-containers.min.js`),
		format:'umd',
		name:'containers',
    sourcemap:true,
		plugins:[terser(), licensePlugin]
	}
]

build(inputOption, outputOptions)

