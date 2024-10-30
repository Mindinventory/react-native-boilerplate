const fs = require('fs');
const path = require('path');

const imageFileNames = () => {
  const array = fs
    .readdirSync('../src/assets/images')
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
  let properties = imageFileNames()
    .map(name => {
      const imageName = path.parse(name).name.toUpperCase().replace(/\s/g, '_');
      return `${imageName}_IMAGE = require('./${name}'),`;
    })
    .join('\n  ');

  const string = `export enum Images {
  ${properties}
}
`;

  fs.writeFileSync('../src/assets/images/index.ts', string, 'utf8');
};

generate();
