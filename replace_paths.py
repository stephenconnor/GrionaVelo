from pathlib import Path

files = [Path('public/routes.json'), Path('src/assets/gpx_files/routes.json')]
for file in files:
    text = file.read_text(encoding='utf-8')
    text = text.replace('src\\assets\\gpx_files\\longRoutes\\', 'assets/gpx_files/longRoutes/')
    text = text.replace('G:\\Git\\cycling-routes\\src\\assets\\gpx_files\\longRoutes\\', 'assets/gpx_files/longRoutes/')
    file.write_text(text, encoding='utf-8')
print('updated', [str(f) for f in files])
