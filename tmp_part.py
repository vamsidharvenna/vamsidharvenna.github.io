import pathlib,re
text=pathlib.Path('df-messenger.js').read_text(encoding='utf-8',errors='ignore')
parts=sorted(set(m.group(1) for m in re.finditer(r'part="([^"]+)"', text) if 'chip' in m.group(1)))
print(parts)
