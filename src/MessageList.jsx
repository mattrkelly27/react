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
class MessageList extends Component {
    render() {
        const messages = this.props.messages.map((message) =>
            <Message message={message} key={message.id} user={this.props.user} />
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