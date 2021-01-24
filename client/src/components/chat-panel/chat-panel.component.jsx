import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectChatPanelMode } from '../../redux/mode/mode.selector';
import { mode } from '../../utils/base.util';

const renderIdealGroup = () => `
<div class="chat-panel-ideal__dimmer--item">
    <div class="chat-panel-ideal__dimmer--circle">
        <svg viewBox="0 0 50 50">
            <circle></circle>
        </svg>
    </div>
    <div class="chat-panel-ideal__dimmer--rect">
        <svg viewBox="0 0 180 40">
            <rect></rect>
        </svg>
    </div>
</div>
`;
// Ideal
const renderIdeal = () => {
    // Data
    const data = new Array(8).fill(0);
    return (
        <div class="chat-panel-ideal">
            <div class="chat-panel-ideal__title"></div>
            <div class="chat-panel-ideal__dimmer">{data.map(() => renderIdealGroup()).join('')}</div>
        </div>
    );
};

const ChatPanel = chatPanel => {
    switch (chatPanel) {
        case mode.chatPanel.ideal: {
            return renderIdeal();
        }
        default:
            return <div className="chat-panel"></div>;
    }
};

const mapStateToProps = createStructuredSelector({
    chatPanel: selectChatPanelMode,
});

export default connect(mapStateToProps)(ChatPanel);
