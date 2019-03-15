import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "anon", 
      messages: [],
      numberOfPages: 0
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.addNotificationMessage = this.addNotificationMessage.bind(this);
  }

  addNewMessage(content) {  //send message to server
    content.username = this.state.currentUser
    let msg = JSON.stringify(content);
    this.socket.send(msg);
  }

  addNotificationMessage(content) {
    content.oldName = this.state.currentUser

    this.setState({currentUser: content.newName})

    let msg = JSON.stringify(content);
    this.socket.send(msg);
  }

  componentDidMount(content) {
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`);
    this.socket.onopen = (content) => {
      console.log("hello!");
    }
    this.socket.onmessage = (content) => {  //recieves message from server
      let newMessage = JSON.parse(content.data);
      let allMessages = "";
      switch(newMessage.type) {
        case "incomingMessage":
        allMessages = this.state.messages.concat(newMessage) // displays new message as well as all old messages
        this.setState({messages: allMessages});
          break;
        case "incomingNotification":
        // this.setState({currentUser: newMessage.username }) // displays notification
        allMessages = this.state.messages.concat(newMessage) // displays new message as well as all old messages
        this.setState({messages: allMessages});
          break;
        case "usercount": // displays number of users online
        let number = newMessage.size
        this.setState({numberOfPages: number});
          break;    
        default: // if unknown event type, this message is given 
          throw "Unknown event type " + newMessage.type;
      };
    };
  }
  render() {
    return (
  <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">magna enim conversationem -- USERS ONLINE: {this.state.numberOfPages}</a>
    </nav>
      <MessageList messages={this.state.messages} user={this.state.currentUser}/>
      <ChatBar user={this.state.currentUser} addNewMessage={this.addNewMessage} addNotificationMessage={this.addNotificationMessage} />   
  </div>
    );
  }
}
export default App;
