import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user-actions';
import { useState } from 'react';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userInf, setUserInf] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userInf;
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInf({ ...userInf, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} action="submit">
        <FormInput
          name="email"
          type="email"
          value={userInf.email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={userInf.password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignin
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
