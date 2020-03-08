import React from "react";
import Header from "tmp-views/Header.js"
import {BrowserRouter} from "react-router-dom";

// Create App component
class App extends React.Component{
  render() {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
  }

}
export default App;
