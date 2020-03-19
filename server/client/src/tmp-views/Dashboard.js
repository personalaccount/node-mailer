import React from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../actions/index";
// import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return class extends React.Component {
    render() {
      return (
        <div className="container">
          Hello! {fetchUser}
          <div className="fixed-action-btn">
            <Link to="/surveys/new" className="btn-floating btn-large red">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      );
    }
  };
};

export default Dashboard;
