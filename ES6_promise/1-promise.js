/**
 * Returns a Promise that resolves or rejects based on a boolean argument.
 * @param {boolean} success - Determines if the promise resolves or rejects.
 * @returns {Promise} - A Promise object.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
