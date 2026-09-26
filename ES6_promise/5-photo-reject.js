/**
 * Returns a rejected Promise with an error message for the given file name.
 * @param {string} filename - The name of the file to process.
 * @returns {Promise} - A rejected Promise with an Error.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
