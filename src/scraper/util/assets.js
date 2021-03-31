import fs from 'fs';
import fetch from 'node-fetch';

export async function downloadFile({ url, dir, name, ext }) {
  console.log(`fetching ${url.cyan}`);

  return new Promise(async (resolve, reject) => {
    const url_ext = url
      .substring(url.length - 5)
      .match(new RegExp(/\.(.+)/))?.[1];
    const file_path = `${dir}/${name}.${ext || url_ext}`;

    try {
      const response = await fetch(url);
      const buffer = await response.buffer();

      fs.writeFileSync(file_path, buffer);
      console.log(`downloaded ${file_path.green}`);
      resolve(file_path);
    } catch (err) {
      console.error(`Failed to download ${file_path.red}`);
      reject(err);
    }
  });
}
