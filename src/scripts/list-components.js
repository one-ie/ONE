import fs from 'fs';
import path from 'path';

const blocksDirectory = 'src/blocks';
const components = [];

fs.readdirSync(blocksDirectory).forEach((file) => {
  const filePath = path.join(blocksDirectory, file);
  const stats = fs.statSync(filePath);

  if (stats.isFile() && file.endsWith('.astro')) {
    const component = {
      name: file.replace('.astro', ''),
      url: `/components/${file.replace('.astro', '')}`,
      image: '/placeholder.jpg', 
    };

    components.push(component);
  }
});

const json = JSON.stringify({ components: components }, null, 2);
fs.writeFileSync('src/data/components.json', json);
