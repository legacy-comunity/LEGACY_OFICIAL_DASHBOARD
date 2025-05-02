const color = {
  reset: "\x1b[0m",
  // Text Colors
  black: (txt) => `\x1b[30m${txt}${color.reset}`,
  red: (txt) => `\x1b[31m${txt}${color.reset}`,
  green: (txt) => `\x1b[32m${txt}${color.reset}`,
  yellow: (txt) => `\x1b[33m${txt}${color.reset}`,
  blue: (txt) => `\x1b[34m${txt}${color.reset}`,
  magenta: (txt) => `\x1b[35m${txt}${color.reset}`,
  cyan: (txt) => `\x1b[36m${txt}${color.reset}`,
  white: (txt) => `\x1b[37m${txt}${color.reset}`,
  // Bright Colors
  brightBlack: (txt) => `\x1b[90m${txt}${color.reset}`,
  brightRed: (txt) => `\x1b[91m${txt}${color.reset}`,
  brightGreen: (txt) => `\x1b[92m${txt}${color.reset}`,
  brightYellow: (txt) => `\x1b[93m${txt}${color.reset}`,
  brightBlue: (txt) => `\x1b[94m${txt}${color.reset}`,
  brightMagenta: (txt) => `\x1b[95m${txt}${color.reset}`,
  brightCyan: (txt) => `\x1b[96m${txt}${color.reset}`,
  brightWhite: (txt) => `\x1b[97m${txt}${color.reset}`,
  // Background Colors
  bgBlack: (txt) => `\x1b[40m${txt}${color.reset}`,
  bgRed: (txt) => `\x1b[41m${txt}${color.reset}`,
  bgGreen: (txt) => `\x1b[42m${txt}${color.reset}`,
  bgYellow: (txt) => `\x1b[43m${txt}${color.reset}`,
  bgBlue: (txt) => `\x1b[44m${txt}${color.reset}`,
  bgMagenta: (txt) => `\x1b[45m${txt}${color.reset}`,
  bgCyan: (txt) => `\x1b[46m${txt}${color.reset}`,
  bgWhite: (txt) => `\x1b[47m${txt}${color.reset}`,
  bgBrightBlack: (txt) => `\x1b[100m${txt}${color.reset}`,
  bgBrightRed: (txt) => `\x1b[101m${txt}${color.reset}`,
  bgBrightGreen: (txt) => `\x1b[102m${txt}${color.reset}`,
  bgBrightYellow: (txt) => `\x1b[103m${txt}${color.reset}`,
  bgBrightBlue: (txt) => `\x1b[104m${txt}${color.reset}`,
  bgBrightMagenta: (txt) => `\x1b[105m${txt}${color.reset}`,
  bgBrightCyan: (txt) => `\x1b[106m${txt}${color.reset}`,
  bgBrightWhite: (txt) => `\x1b[107m${txt}${color.reset}`
};

export {
  color
}