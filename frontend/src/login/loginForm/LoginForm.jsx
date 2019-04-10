import React from 'react';
import './loginForm.less';
import PropTypes from 'prop-types';
import PureComponent from '../../js/base/pureComponent/PureComponent.jsx';

export default class LoginForm extends PureComponent {
    static propTypes = {
        translates: PropTypes.object.isRequired,
        toggleForms: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { translates, toggleForms } = this.props;
        return (
            <div className='login-form-wrapper'>
                <div className='login-form-wrapper__logo logo'>
                    <img className='logo__image' src='../../../assets/react-logo.svg'/>
                </div>
                <div className='login-form-wrapper__login-input logo'>
                    <label htmlFor="login">Login</label>
                    <input id="login" type="text" placeholder='Enter your login...'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" placeholder='Enter your password...'/>
                </div>
                <button onClick={toggleForms}>{translates.resources.registration}</button>
            </div>
        )
    }
}
