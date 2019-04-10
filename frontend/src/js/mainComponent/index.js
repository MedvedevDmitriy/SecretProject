import { connect } from 'react-redux';
import Component from '../../login/loginForm/LoginForm.jsx';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
    modules: selectors.getConfigModules(state),
    activeBlocks: selectors.getConfigActiveBlocks(state),
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(actions.getData()),
    initConnection: () => dispatch(actions.initConnection()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
