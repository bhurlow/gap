#!/usr/bin/env node

import fs from 'fs'
import { ask } from './llm'
import yargs from 'yargs/yargs'

const argv = yargs(process.argv.slice(2))
  .options({
    a: { type: 'boolean', default: false }
  })
  .parseSync()

const main = async () => {
  const [inputFile] = argv._

  if (!inputFile) {
    throw new Error('no file')
  }

  const exists = fs.existsSync(String(inputFile))

  if (!exists) {
    throw new Error('file not found')
  }

  const contents = fs.readFileSync(inputFile, 'utf8')

  const res = await ask(contents)

  const msg = res.content[0]

  if (msg.type === 'text') {
    console.log(msg.text)
  }
}

main().catch(console.error)
