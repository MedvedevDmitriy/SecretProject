import React from 'react';
import PureComponent from '../js/base/pureComponent/PureComponent.jsx';
import './login.less';
import LoginForm from './loginForm/LoginForm.jsx';
import RegistrationForm from './registrationForm/RegistrationForm.jsx';
import { getTranslatesByLocale, getCurrentLocale } from './loginTranslates/logic';

export default class  Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            locale: getCurrentLocale(),
            translates: getTranslatesByLocale(getCurrentLocale()),
            isLoginForm: true,
        };
    }

    toggleForms = () => {
        this.setState(state => ({
            ...state,
            isLoginForm: !state.isLoginForm,
        }))
    };

    render() {
        const { toggleForms } = this;
        const { isLoginForm, translates } = this.state;

        return (
            <div className={"login-wrapper"}>
                {
                    isLoginForm ?
                        <LoginForm
                            translates = {translates}
                            toggleForms = {toggleForms}
                        />
                        :
                        <RegistrationForm
                            translates = {translates}
                            toggleForms = {toggleForms}
                        />
                }
            </div>
        );
    }
}