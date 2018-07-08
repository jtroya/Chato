import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Chat from './components/Chat'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      loggedUser: false
    };
  }

  login = logged => {
    this.setState({ loggedUser: logged });
  };

  setUsername = username => {
    this.setState({username: username});
  };

  render() {
    return (
      <div className="App">
        {!this.state.loggedUser ?
          <Login login={this.login} setUsername={this.setUsername}/>
          :
          <Chat username={this.state.username}/>
        }
      </div>
    );
  }
}

export default App;
