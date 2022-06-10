import { promises as fs } from 'fs';
import path from 'path';

const ORIGINAL_DATA_PATH = '../src/image-original-nouns-data.json';

const SUSHI_DATA_PATH = '../src/image-sushi-data.json';

const compare = async (left_path: string, right_path: string) => {
  const left_palette: string[] = require(left_path).palette;
  const right_palette: string[] = require(right_path).palette;
  if (left_palette !== right_palette) {
    const added = right_palette.filter(color => !left_palette.includes(color));
    console.log(`Found new colors in palette: [${added.toString()}]`);
    return 1;
  }
  return 0;
};

compare(ORIGINAL_DATA_PATH, SUSHI_DATA_PATH).then(
  ret_code => {
    process.exit(ret_code);
  }
);
