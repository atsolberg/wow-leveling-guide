import fs from 'fs';
import fetch from 'node-fetch';

/**
 * Download a file and save it in the directory specified
 * @param {URL} url - the url of the resource to download
 * @param {string} dir - directory to store the file in
 * @param {string} name - the file name to save as
 * @param {string} [ext] - the file extension to save as
 * @return {Promise<string>}
 */
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
