import path from "path";
import fs from "fs";
import { Anthropic } from "@anthropic-ai/sdk";
import { prompt } from "./prompt";

const models = [
  "claude-3-opus-20240229",
  "claude-3-5-sonnet-20240620",
  "claude-3-haiku-20240307",
];

export const getAnthropicKey = () => {
  const keyPath = path.join(process.env.HOME!, ".config", "anthropic.token");
  return fs.readFileSync(keyPath, "utf8").trim();
};

export const ask = async (input: string) => {
  const temperature = 1;
  const maxTokens = 4096;

  //const model = "claude-3-haiku-20240307";
  const model = "claude-3-5-sonnet-20240620"

  const anthropic = new Anthropic({ apiKey: await getAnthropicKey() });

  const message = await anthropic.messages.create({
    model,
    messages: [{ role: "user", content: input }],
    max_tokens: maxTokens || 4096,
    temperature,
    system: prompt,
  });

  return message;
};
