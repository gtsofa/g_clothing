import React from 'react';
import Directory from '../../components/Directory/Directory';


import './HomePage.styles.scss';

const HomePage = ({ history }) => {
    return (
        <div className="homepage">
            <Directory history={history}/>
        </div>
    );
}

export default HomePage;