import React from 'react';
import './mainComponent.less';
import PropTypes from 'prop-types';
import PureComponent from '../base/pureComponent/PureComponent.jsx';
import axios from 'axios';

export default class MainComponent extends PureComponent {
    static propTypes = {
        modules: PropTypes.object.isRequired,
        getData: PropTypes.func.isRequired,
        activeBlocks: PropTypes.object.isRequired,
        initConnection: PropTypes.func.isRequired,
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
        return (
            <div className='page-wrapper'>
                <h1>HELLO WORLD</h1>
                <button onClick={this.handleRequest}>SEND REQUEST</button>
            </div>
        )
    }
}
