import { connect } from 'react-redux';
import LoginView from './Login.view';
import LoginLocal from './Login.local';
import { logIn, logOut } from '../../reducer/user';

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    logIn: credentials =>
      dispatch(logIn(credentials)),
    logOut: () =>
      dispatch(logOut())
  })
)(LoginLocal(LoginView));
