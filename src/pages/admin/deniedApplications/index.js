import { AuthUserContext, withAuthorization } from '../../Signin/Session';
import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Container from "../../../components/admin/container";
import Chart from "../../../components/admin/chart";
import { Bar, Line, Pie } from "react-chartjs-2";
import SignOutButton from '../../Signin/SignOut';

class DeniedApplication extends Component {

  render() {
    return (
      <div className="">
        <Nav
          home="/admin/dashboard"
          currentPage="Denied Applications"
          signOut={<SignOutButton />}
        />

        <Chart />


      </div>)
  }

};

const condition = authUser => !!authUser;
    
export default withAuthorization(condition)(DeniedApplication);