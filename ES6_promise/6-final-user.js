import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles profile signup by running signUpUser and uploadPhoto concurrently,
 * returning the settled status and value/reason for each.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @param {string} fileName - The file name.
 * @returns {Promise} - A promise resolving to an array of results.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((res) => ({
    status: res.status,
    value: res.status === 'fulfilled' ? res.value : res.reason,
  })));
}
