const fs = require('fs');
const path = require('path');

const iconFileNames = () => {
  const array = fs
    .readdirSync('../src/assets/icons')
    .filter(file => {
      return ['gif', 'jpeg', 'jpg', 'png', 'webp'].includes(file.split('.')[1]);
    })
    .map(file => {
      const ext = path.parse(file).ext;
      return file.split('@').length > 1 &&
        ['1x', '2x', '3x'].includes(file.split('@')[1].split('.')[0])
        ? file.replace(`@2x${ext}`, `${ext}`).replace(`@3x${ext}`, `${ext}`)
        : file;
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
