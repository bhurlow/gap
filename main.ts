#!/usr/bin/env node

import fs from 'fs'
import { ask } from './llm'
import { getStdin } from 'ts-stdin'
import yargs from 'yargs/yargs'

const argv = yargs(process.argv.slice(2))
  .options({
    a: { type: 'boolean', default: false }
  })
  .parseSync()

const getInput = async () => {
  const [inputFile] = argv._

  if (!inputFile) {
    return getStdin()
  }

  const exists = fs.existsSync(String(inputFile))

  if (!exists) {
    throw new Error('file not found')
  }

  return fs.readFileSync(inputFile, 'utf8')
}

const main = async () => {
  const input = await getInput()
  const res = await ask(input)

  const msg = res.content[0]

  if (msg.type === 'text') {
    console.log(msg.text)
  }
}

main().catch(console.error)
