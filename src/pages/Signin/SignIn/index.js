import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';
import { NavLink } from "react-router-dom";
import Nav from "../../../components/Nav";

const SignInPage = () =>

  (
    <div className="brickBackground" >
      <nav className="navbar navbar-expand-lg navbar-light goldBg redText">
        <div className="justify-content-center">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        </div>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="card bg-light  signInCard">
          <div className="card-body bg-light">
            <div className="" >
              <div className="">
               
                <h1 className="redText largeTitles text-center mr-5">Sign In</h1>
                <SignInForm />
                <div className="text-center">
                <button className="bg-warning p-2 hvr-grow-shadow p-2"><NavLink className=" redText" to="/user/dashboard"><b>I am a User</b></NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.TRUCKER);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div>
      <form className="mt-3" onSubmit={this.onSubmit}>
       <h2 className="font5 redText">Trucker & Admin</h2>
        <b><label for="email" className="col-sm-5 col-form-label"><i class="fas fa-envelope-square mr-2"></i>Email Address</label></b>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Email Address"
          id="focusedInput"
        /> <br></br>
        <b><label for="password" className="col-sm-5 col-form-label"><i class="fas fa-lock mr-2"></i>Password</label></b>
        <input
          id="focusedInput"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Enter Password"
          // id="password"
        /><br></br>
        <div>
        <PasswordForgetLink />
        <button className="redBg w-25 text-white p-2 hvr-grow-shadow ml-5 mt-2" disabled={isInvalid} type="submit">
        <b>Sign In</b>
        </button>
        <SignUpLink />
        </div>
        {error && <p>{error.message}</p>}
      </form>

  
    </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };