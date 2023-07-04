const fs = require('fs');
const path = require('path');

const iconFileNames = () => {
  const array = fs
    .readdirSync('../src/assets/svgIcons')
    .filter(file => {
      return file.endsWith('.svg');
    })
    .map(file => {
      return file.replace('@2x.svg', '').replace('@3x.svg', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = iconFileNames()
    .map(name => {
      const iconName = path.parse(name).name.toUpperCase();
      return `import ${iconName}_ICON from './${name}';`;
    })
    .join('\n');

  let exportFiles = iconFileNames()
    .map(name => {
      const iconName = path.parse(name).name.toUpperCase();
      return `${iconName}_ICON,`;
    })
    .join('\n  ');

  const string = `${properties}\n\nexport const SVGIcons = {\n  ${exportFiles}
};\n`;

  fs.writeFileSync('../src/assets/svgIcons/index.ts', string, 'utf8');
};

generate();
