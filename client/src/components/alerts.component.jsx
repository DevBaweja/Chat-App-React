import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAlertMode } from '../redux/alert/alert.selector';
import { clearAlert } from '../redux/alert/alert.actions';

import { mode } from '../utils/base.util';

const renderAlert = (text, type, clearAlert) => (
    <div className="alerts">
        <div className={`alert alert--${type}`}>
            <svg
                className={`alert__svg alert__svg--${type}`}
                dangerouslySetInnerHTML={{
                    __html: `<use xlink:href="svg/sprite.svg#icon-${type}"></use>`,
                }}
            ></svg>
            <span className="alert__message">{text}</span>
            <svg
                onClick={clearAlert}
                className="alert__cross"
                dangerouslySetInnerHTML={{
                    __html: `<use xlink:href="svg/sprite.svg#icon-cross-small"></use>`,
                }}
            ></svg>
        </div>
    </div>
);

const Alerts = ({ alert, clearAlert }) => {
    let text;
    let type;
    switch (alert) {
        case mode.alert.welcome.new:
            text = 'Welcome to #ChatFuel.';
            type = 'success';
            break;
        case mode.alert.welcome.old:
            text = 'Welcome back!';
            type = 'success';
            break;
        default:
            return <div className="alerts"></div>;
    }
    return renderAlert(text, type, clearAlert);
};

const mapStateToProps = createStructuredSelector({
    alert: selectAlertMode,
});

const mapDispatchToProps = dispatch => bindActionCreators({ clearAlert }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
