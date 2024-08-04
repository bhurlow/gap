#!/usr/bin/env node

//import { prompt } from "./prompt";
//
//import yargs from "yargs/yargs";
//
//const argv = yargs(process.argv.slice(2))
//  .options({
//    a: { type: "boolean", default: false },
//  })
//  .parse();

import { ask } from './llm'

const input = `

function cube(x) {
  {{FILL_HERE}}
}

`

const main = async () => {
  console.log('starting')
  const res = await ask(input)

  const msg = res.content[0]

  if (msg.type === 'text') {
    console.log(msg.text)
  }


}

main().catch(console.error)
