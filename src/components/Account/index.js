import React from 'react';
import {SearchAvailabilityLink} from '../SearchAvailability/index.js';

class Account extends React.Component {
    render() {
        return (
            <div>
                <h1>Account</h1>
                <SearchAvailabilityLink />
            </div>
        )
    }
}

export default Account;