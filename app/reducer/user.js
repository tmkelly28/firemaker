const RECEIVE_USER = 'RECEIVE_USER';
const REMOVE_USER = 'REMOVE_USER';
const DEFAULT = {};

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = () =>
  ({ type: REMOVE_USER });

export const logIn = credentials =>
  dispatch => {
    const { email, pwd } = credentials;

    window.firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          return window.firebase
            .auth()
            .signInWithEmailAndPassword(email, pwd);
        } else throw err;
      })
      .catch(err => console.error(err));
  }

export const logOut = () =>
  dispatch =>
    window.firebase.auth()
      .signOut()
      .then(() => dispatch(removeUser()))
      .catch(err => console.error(err));

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case RECEIVE_USER: return action.user;
    case REMOVE_USER: return DEFAULT;
    default: return state;
  }
}

