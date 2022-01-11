import React, { Component } from "react";
import "./App.css";
import BarChart from "./Component/BarChart";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BarChart />
        </div>
      </div>
    );
  }
}
export default App;
