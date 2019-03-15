import React, { Component } from "react";
import { connect } from "react-redux";
import { getallPlanets } from "../actions";
import { bindActionCreators } from "redux";

// components
import AllPlanets from "../components/Home/allPlanets";

class Home extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = async page => {
    const newPage = page;
    try {
      this.props.getallPlanets(newPage);
    } catch (error) {
      this.setState({ errorStatus: error.message });
    }
  };

  handlePage = boolean => {
    if (this.props.planets !== null) {
      let next = this.props.planets.next;
      let previous = this.props.planets.previous;

      if (boolean && next != null) {
        this.getData(next);
      }

      if (!boolean && previous != null) {
        this.getData(previous);
      }
    }
  };

  render() {
    return (
      <AllPlanets planets={this.props.planets} handlePage={this.handlePage} />
    );
  }
}
function mapStateToProps(state) {
  return {
    planets: state.planets.all
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getallPlanets }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
