/**
 * Appends handlers to a promise to handle resolution, rejection, and finally logging.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} - An updated promise.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
