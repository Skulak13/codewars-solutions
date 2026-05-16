function circleMender(content) {
  const lines = content.split('\n');
  
  function mendLine(line) {
  const first = line.indexOf('#');
  const last = line.lastIndexOf('#');

  if (first === -1) return line;

  const chars = line.split('');
  for (let i = first; i <= last; i++) {
    if (chars[i] === ' ') chars[i] = '#';
  }
  return chars.join('');
}

  const fixedLines = lines.map(mendLine);

  return fixedLines.join('\n');

}
