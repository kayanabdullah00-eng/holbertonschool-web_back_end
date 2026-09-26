/**
 * Returns the value of the promise that resolves first.
 * @param {Promise} chinaDownload - The first promise.
 * @param {Promise} USDownload - The second promise.
 * @returns {Promise} - The result of the fastest resolving promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
