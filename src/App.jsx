import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "User"}, 
      messages: []
    };
    this.addNewMessage = this.addNewMessage.bind(this);
  }
    
  
  addNewMessage(content) {
    console.log("we are in the app.jsx") 
    // const newMessage = {id: content.id, username: content.username, content: content.content};
    // const messages = this.state.messages.concat(newMessage);
    // this.setState({messages: messages })
    
    let msg = JSON.stringify(content);
    this.socket.send(msg);
  }

  componentDidMount(content) {
    this.socket = new WebSocket(`ws://${window.location.hostname}:3001`);

    this.socket.onopen = (content) => {
      console.log("hello!");
    }

    this.socket.onmessage = (content) => {
      console.log(content);
      const newMessage = JSON.parse(content.data);
      const allMessages = this.state.messages.concat(newMessage);
      this.setState({messages: allMessages});

    }
  

    // console.log("componentDidMount <App />");
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  render() {
    return (
  <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
      <MessageList messages={this.state.messages}/>
      <ChatBar user={this.state.currentUser.name} addNewMessage={this.addNewMessage}/> 
  </div>
    );
  }
}
export default App;
