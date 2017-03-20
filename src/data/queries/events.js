/**
 * Created by madow_000 on 20.03.2017.
 */
const events = {
  type: UserType,
  resolve({ request }) {
    return request.user && {
        id: request.user.id,
        email: request.user.email,
      };
  },
};

export default events;
