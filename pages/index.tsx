import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  // static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hey, there!</div>;
  }
}

const mapStateToProps = _state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
