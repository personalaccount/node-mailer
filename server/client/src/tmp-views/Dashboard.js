import React from 'react';
import { Link } from 'react-router-dom';
import {FETCH_USER} from "../actions/types";
// import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            {/*<SurveyList />*/}
            Hello! {FETCH_USER}
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;