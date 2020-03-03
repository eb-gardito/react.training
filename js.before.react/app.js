import React, { Component } from "react";
import "./styles.css";

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + " " + this.lastname;
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return "React Developer";
  }
}

class App extends Component {
  getGreeting() {
    return "Welcome to React";
  }

  render() {
    var me = new ReactDeveloper("Robin", "Wieruch");
    console.log(me.getName());
    console.log(me.getJob());

    return (
      <div>
        <h1>{this.getGreeting()}</h1>
      </div>
    );
  }
}
export default App;