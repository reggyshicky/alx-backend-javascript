import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignUp(firstName, lastName, fileName) {
  const p1 = uploadPhoto(firstName, lastName);
  const p2 = signUpUser(fileName);
  const data = await Promise.allSettled([p1, p2])
    .then((results) => results.map((result) => {
      if (result.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: result.reason.toString(),
        };
      }
      return result;
    }));

  return Promise.resolve(data);
}
