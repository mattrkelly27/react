// {
// <div className="message system">
// </div> */}

import React, { Component } from "react";
class Message extends Component {
    render() {
        return(
            <div className="message">
            <span className="message-username">Matt</span>
            <span className="message-content">I would like a nap please...</span>
            </div>
        );
    }
}

export default Message;