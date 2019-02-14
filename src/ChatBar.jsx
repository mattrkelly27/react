import React, { Component } from "react";

class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {user: "user"}, 
            messages: []
          };
    }

    onSubmit = evt => {
        evt.preventDefault();
        const content = {
          username: evt.target.elements.username.value,
          content: evt.target.elements.newMessage.value,
          id: Date.now(),
          type: "postMessage",
          notification: "postNotification"
        };
        this.props.addNewMessage(content);
        evt.target.elements.newMessage.value = "";
    };

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <footer className="chatbar">
                    <input className="chatbar-username" placeholder={this.state.currentUser.user} name="username" />
                    <input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessage" />
                    <input type="submit" className="chatbar-button" />
                </footer>
            </form>
        );
    }
}

export default ChatBar;