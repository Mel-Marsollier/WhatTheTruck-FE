import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { NavLink } from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../constants/routes';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser)
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("trucker/application");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <div className="whiteBackground">
        <nav class="navbar navbar-expand-lg navbar-light goldBg redText d-flex justify-content-around">
          <img className="logo" src="https://api-food-truck.herokuapp.com/assets/images/truckLogo.png" />
        </nav>
        <div className="noMarginContainer signInCard">
          <form className="signUpForm" onSubmit={this.onSubmit}>
            <h1 className="redText largeTitles text-center">Sign Up</h1>

            <br></br>
            <b><label for="username" className="col-sm-5 col-form-label text-white"><i class="fas fa-address-card mr-2"></i>Full Name</label></b>


            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />



            <b><label for="email" className="col-sm-5 col-form-label text-white"><i class="fas fa-envelope-square mr-2"></i>Email Address</label></b>

            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />


            <br></br>
            <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-lock mr-2"></i>Password</label></b>


            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />

            <br></br>
            <b><label for="password" className="col-sm-5 col-form-label text-white"><i class="fas fa-user-lock mr-2"></i>Confirm Password</label></b>

            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            
            {error && <p>{error.message}</p>}
            
            <br></br>
            <br></br>
            <div className="float-right">
              <button className="btn btn-light btn-md text-monospace" disabled={isInvalid} type="submit"><span class="spinner-grow spinner-grow-sm"></span><strong>Sign Up</strong></button>
            </div>


            <br disabled={!isInvalid}></br>
            <br disabled={!isInvalid}></br>
            

            


            
          </form>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p className="text-white darkbackground p-1">
    Don't have an account?   <Link to={ROUTES.SIGN_UP}> <b>Sign Up</b></Link>
  </p>
);


const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };