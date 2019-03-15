import React, { Component } from "react";
class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {user: "user"}, 
            messages: []
          };
    }
    onChange = evt => {
        console.log(evt.key, evt.target.value);
        if(evt.key === "Enter") {
        const content = {
        //   username: evt.target.elements.username.value,
          content: evt.target.value,
          id: Date.now(),
          type: "postMessage",
        };
        this.props.addNewMessage(content);
        evt.target.value = "";

        }
    };
    render() {
        return(
                <footer className="chatbar">
                    <input className="chatbar-username" placeholder={this.props.user} name="username" />
                    <input onKeyPress={this.onChange} className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessage" />
                    <input type="submit" className="chatbar-button" />
                </footer>
        );
    }
}
export default ChatBar;