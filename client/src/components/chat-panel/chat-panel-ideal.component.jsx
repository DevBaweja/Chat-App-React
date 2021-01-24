import React from 'react';

const renderIdealGroup = key => (
    <div className="chat-panel-ideal__dimmer--item" key={key}>
        <div className="chat-panel-ideal__dimmer--circle">
            <svg viewBox="0 0 50 50">
                <circle></circle>
            </svg>
        </div>
        <div className="chat-panel-ideal__dimmer--rect">
            <svg viewBox="0 0 180 40">
                <rect></rect>
            </svg>
        </div>
    </div>
);

const ChatPanelIdeal = () => {
    // Data
    const data = new Array(8).fill(0);
    return (
        <div className="chat-panel-ideal">
            <div className="chat-panel-ideal__title"></div>
            <div className="chat-panel-ideal__dimmer">{data.map((item, key) => renderIdealGroup(key))}</div>
        </div>
    );
};

export default ChatPanelIdeal;
