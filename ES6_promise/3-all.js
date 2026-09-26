import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by resolving multiple promises simultaneously.
 * Logs the photo body, first name, and last name on success, 
 * or logs an error message if any promise fails.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
