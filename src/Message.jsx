// {
// <div className="message system">
// </div> */}

import React, { Component } from "react";
class Message extends Component {
   
    render() {
        
        return(
            <div className="message">
            <span className="message-username">{this.props.message.username}</span>
            <span className="message-content">{this.props.message.content}</span>
            <span className="notification-content">NOTIFICATION===> {this.props.notification} changed their name to {this.props.message.username}</span>

            </div>
        );
    }
}

export default Message;