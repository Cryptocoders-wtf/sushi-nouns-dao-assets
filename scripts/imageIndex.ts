import { promises as fs } from 'fs';
import path from 'path';

const writeFile = async (folderpath: string, writeFiles: string[]) => {
  const readMeFile = folderpath + "/README.md";
  const text = writeFiles.map((file: string) => {
    return `![${file}](${file}) ${file}`;
  }).join("\n\n");

  await fs.writeFile(
    readMeFile,
    text,
  );

};

const main = async () => {
  const partfolders = ['0-backgrounds', '1-bodies', '2-accessories', '3-heads', '4-glasses', '5-misc'];
  for (const folder of partfolders) {
    const folderpath = path.join(__dirname, '../images', folder);
    const files = await fs.readdir(folderpath);
    const writeFiles = [];
    for (const file of files) {
      if (file.endsWith(".png")) {
        writeFiles.push(file);
      }
    }
    if (writeFiles.length > 0) {
      await writeFile(folderpath, writeFiles);
    }
  }
}

main();
