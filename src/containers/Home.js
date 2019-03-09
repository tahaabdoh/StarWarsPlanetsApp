import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getallPlanets } from '../actions';
import { bindActionCreators } from 'redux';



// components 
import AllPlanets from '../components/Home/allPlanets';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            pageCounter: 1
        };
    }

    componentDidMount() {
        this.getData();
    }


    getData = async (page) => {
        const newPage = page;
        try {
            this.props.getallPlanets(newPage);
        } catch (error) {
            this.setState({ errorStatus: error.message });
        }
    };


    handlePage = boolean => {
        if (this.props.planets !== null) {
            const { pageCounter } = this.state;
            let next = this.props.planets.next;
            let previous = this.props.planets.previous;

            // console.log(previous);
            // console.log(next);
            let pageCount = pageCounter;
            
            switch (boolean) {
                case true && next != null:
                    !pageCount ? pageCount = 2 : pageCount++;
                    break;
                case false && previous != null:
                    pageCount > 2 ? pageCount-- : pageCount = "";
                    break;
                default:
                    return;
            }

            if (next == null) {
               // console.log("next is null");
                pageCount = pageCount - 2;
            }
            if (previous == null) {
               // console.log("previous is null");
            }

           // console.log(pageCount);
            this.setState({ pageCounter: pageCount });
            this.getData(pageCount);
        }
    };

    render() {
        return (
    <AllPlanets planets={this.props.planets} handlePage={this.handlePage} />
        )
    }
}
function mapStateToProps(state) {
    return {
        planets: state.planets.all
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getallPlanets }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);