import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
        
        {this.state.change ? (
          <h2>Welcome to React</h2>
        ) : (
          <h2>This is a Class component</h2>
        )}
        <button className="onClick"
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          Click Here!
        </button>
      </div>
    );
  }
}

export default App;
