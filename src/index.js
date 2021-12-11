import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./fullpage";
// import reportWebVitals from "./reportWebVitals";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import Header from "./header";
// import Footer from "./footer";
// import About from "./About";
// import Cart from "./Cart";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter> */}
    <Homepage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
