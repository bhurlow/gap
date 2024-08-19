
## Gap

Fill holes in your programs using LLMs. Inspired by [Victor's scripts](https://github.com/VictorTaelin/AI-scripts) and intended to be used in an editor buffer. Holes designated by `{{FILL_HERE}}` are replaced on a best-effort basis by the AI API

```javascript
function cube(x) {
  {{FILL_HERE}}
}
```

## Installation

First, put an anthropic token into `~/.config/anthropic.token`. The token should have access to Claude 3.5 Sonnet.

Next, clone the project, `pnpm install` and `pnpm link --global` to link the `gap` cli command. Then optionally in your editor you can pass the current buffer in like:

```lua
vim.keymap.set("n", "rg", "<cmd>%!cat % | gap<CR>", { })
```
