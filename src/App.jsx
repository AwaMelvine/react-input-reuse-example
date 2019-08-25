import React from 'react';
import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="App">
        <h1>App</h1>

        <Input
          label="Username"
          type="text"
          name="username"
          value={this.state.username}
          handleChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
