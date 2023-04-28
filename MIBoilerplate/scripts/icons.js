const fs = require('fs');
const path = require('path');

const iconFileNames = () => {
  const array = fs
    .readdirSync('../src/assets/icons')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file.replace('@2x.png', '').replace('@3x.png', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = iconFileNames()
    .map(name => {
      const iconName = path.parse(name).name.toUpperCase();
      return `${iconName}_ICONS = require('./${name}'),`;
    })
    .join('\n  ');

  const string = `export enum Icons {
  ${properties}
}
`;

  fs.writeFileSync('../src/assets/icons/index.ts', string, 'utf8');
};

generate();
