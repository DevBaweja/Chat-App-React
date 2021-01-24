import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectChatPanelMode } from '../../redux/mode/mode.selector';
import { mode } from '../../utils/base.util';
import ChatPanelIdeal from './chat-panel-ideal.component';

const renderChatPanel = ({ chatPanel }) => {
    switch (chatPanel) {
        case mode.chatPanel.ideal: {
            return <ChatPanelIdeal />;
        }
        default:
            return '';
    }
};
const ChatPanel = ({ chatPanel }) => {
    return <div className="chat-panel">{renderChatPanel({ chatPanel })}</div>;
};

const mapStateToProps = createStructuredSelector({
    chatPanel: selectChatPanelMode,
});

export default connect(mapStateToProps)(ChatPanel);
