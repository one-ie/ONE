import fs from 'fs';
import path from 'path';

const blocksDirectory = 'src/components';
const components = [];

function getComponentsRecursive(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // recurse into nested directories
      getComponentsRecursive(filePath);
    } else if (stats.isFile() && file.endsWith('.astro')) {
      const component = {
        name: file.replace('.astro', ''),
        url: `/components/${file.replace('.astro', '')}`,
        image: '/placeholder.jpg', 
      };

      components.push(component);
    }
  });
}

getComponentsRecursive(blocksDirectory);

const json = JSON.stringify({ components: components }, null, 2);
fs.writeFileSync('src/data/component-dir.json', json);