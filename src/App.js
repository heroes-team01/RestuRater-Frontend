import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Main from "./components/main";
import restuData from "./components/resturater.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: restuData,
    };
  }

  render() {
    return (
      <div>
        <Main restData={this.state.data} />
      </div>
    );
  }
}
export default App;
