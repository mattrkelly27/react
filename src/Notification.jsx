import React, { Component } from "react";
class Message extends Component {

   

    render() {  
        return(
          
            <div className="notification">
                <span className="notification-content">TO BE SURE: {this.props.message.oldName} changed their name to {this.props.message.newName}</span>
            </div>
               
        );
    }
}
export default Message;