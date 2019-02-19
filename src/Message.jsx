import React, { Component } from "react";
class Message extends Component {
    render() {  
        return(
            <div className="message">
                <span className="message-username">{this.props.message.username}</span>
                <span className="message-content">{this.props.message.content}</span>
                <div className="notification">
                    <span className="notification-content">TO BE SURE: {this.props.user} changed their name to {this.props.message.username}</span>
                </div>
            </div>
        );
    }
}
export default Message;