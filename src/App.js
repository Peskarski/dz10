import React from 'react';
import Form from './components/Form/Form.js';
import List from './components/List/List.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    )
  }
}

export default App;
