import { color } from './Colors.mjs';

function log({
  borderColor = 'magenta',
  lines = [],
  clear = false
} = {}) {
  const totalWidth = process.stdout.columns || 80;
  const lineRepeat = totalWidth - 2;

  const border = color[borderColor];
  
  clear && console.clear();
  
  console.log(border('╭' + '─'.repeat(lineRepeat) + '╮'));

  for (const { text, color: lineColor = 'white' } of lines) {
    const lineText = color[lineColor](text);
    const padding = Math.max(0, lineRepeat - text.length);
    console.log(border('│') + `${lineText}` + ' '.repeat(padding));
  }

  console.log(border('╰' + '─'.repeat(lineRepeat) + '╯'));
}

export {
  log
}