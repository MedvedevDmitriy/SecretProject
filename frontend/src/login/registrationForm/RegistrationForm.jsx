import React from 'react';
import './registrationForm.less';
import PropTypes from 'prop-types';
import PureComponent from '../../js/base/pureComponent/PureComponent.jsx';
import axios from 'axios';

export default class RegistrationForm extends PureComponent {
    static propTypes = {
        translates: PropTypes.object.isRequired,
        toggleForms: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    handleRequest = () => {
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('http://localhost:8080/greeting')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { translates, toggleForms } = this.props;
        return (
            <div className='registration-form-wrapper'>
                <div className='login-form-wrapper__logo logo'>
                    <img className='logo__image' src='../../../assets/react-logo.svg'/>
                </div>
                <div className='login-form-wrapper__login-input logo'>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" placeholder='Enter your login...'/>
                </div>
                <div className='login-form-wrapper__login-input logo'>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder='Enter your email...'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder='Enter your password...'/>
                </div>
                <div>
                    <label htmlFor="passwordAgain">Password Again</label>
                    <input id="passwordAgain" type="password" placeholder='Enter your password again...'/>
                </div>
                <button onClick={toggleForms}>{translates.resources.registration}</button>
            </div>
        )
    }
}
