const fs = require('fs');
const path = require('path');

const imageFileNames = () => {
  const array = fs
    .readdirSync('../src/assets/images')
    .filter(file => {
      return file.endsWith('.webp');
    })
    .map(file => {
      return file.replace('@2x.webp', '').replace('@3x.webp', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      const imageName = path.parse(name).name.toUpperCase();
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
