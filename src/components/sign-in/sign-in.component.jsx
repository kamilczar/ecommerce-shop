import React from "react";
import "./sign-in.style.scss";

import FormInputComponent from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, SignInWithGoogle } from "../../utils/firebase";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputComponent
            name="email"
            value={this.state.email}
            required
            type="email"
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInputComponent
            name="password"
            value={this.state.password}
            required
            type="password"
            label="Password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
