import { Component } from 'react';
import { auth, signinWithGoogle } from '../../firebase/firebase-utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} action="submit">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signinWithGoogle} isGoogleSignin>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
