import { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-up.scss';

const SignUp = ({ signUpStart }) => {
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = newUser;
    if (password !== confirmPassword) {
      alert('passwords are different');
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const { displayName, email, password, confirmPassword } = newUser;
  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (newUser) => dispatch(signUpStart(newUser)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
