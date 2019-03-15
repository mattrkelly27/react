{/* <main className="messages">
<div className="message">
  <span className="message-username">Anonymous1</span>
  <span className="message-content">I won't be impressed with technology until I can download food.</span>
</div>
<div className="message system">
</div>
</main> */}

import React, { Component } from "react";
import Message from './Message.jsx';
import Notification from './Notification.jsx';
class MessageList extends Component {
    render() {
        const messages = this.props.messages.map((message) => {
           if(message.type === "incomingMessage") {
               return(
                <Message message={message} key={message.id} user={this.props.user} />
               )
           }
           else if(message.type === "incomingNotification") {
               return(
            <Notification message={message} key={message.id}  />
               )
           }

        }
        );
        const notifications = this.props.messages.map((message) =>
            <Message notification={message.notification}/>
        );
        return(
            <div>
                <main className="messages"> {messages} </main>
            </div>
        );
    }
}

export default MessageList;