import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAlertMode } from '../redux/alert/alert.selector';
import { mode } from '../utils/base.util';

const renderAlert = (text, type) => (
    <div className="alerts">
        <div className={`alert alert--${type}`}>
            <svg
                className={`alert__svg alert__svg--${type}`}
                dangerouslySetInnerHTML={{
                    __html: `<use xlink:href="svg/sprite.svg#icon-${type}"></use>`,
                }}
            ></svg>
            <span className="alert__message">{text}</span>
        </div>
    </div>
);

const Alerts = ({ alert }) => {
    let text;
    let type;
    switch (alert) {
        case mode.alert.welcome: {
            text = 'Welcome to #ChatFuel.';
            type = 'success';
            return renderAlert(text, type);
        }
        default:
            return <div className="alerts"></div>;
    }
};

const mapStateToProps = createStructuredSelector({
    alert: selectAlertMode,
});

export default connect(mapStateToProps)(Alerts);
