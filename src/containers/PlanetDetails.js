import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSelectedplanet, clearPlanet } from '../actions';
import { Link } from 'react-router-dom';


const showDetails =(title, value) =>{
    return (
       
       <div className='row'>
                            <label className='col-sm-4 col-form-label'>{title}</label>
                            <div className='col-sm-8'>
                                <div className='form-control-plaintext'>
                                    {value}
                                </div>
                            </div>
                        </div>
    )
}

class PlanetDetails extends Component {

    componentDidMount() {
        this.props.getSelectedplanet(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearPlanet();
    }

   

    renderPlanets = ({ selected }) => {
        if (selected) {
            return selected.map((item) => {
                return (
                    <div key="item">
                        <h3>{item.name}</h3>
                        {/*orbital_period*/}
                        {showDetails("Orbital period", item.orbital_period)}
                       
                        {/*population*/}
                        {showDetails("Population", item.population)}
                        
                        {/*diameter*/}
                        {showDetails("Diameter", item.diameter)}
                                               
                         {/*gravity*/}
                         {showDetails("Gravity", item.gravity)}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='card-planet-details'>
                <div className="pagination-btns mb-2 text-right">
                    <div className="btn-group">
                        <Link  to={`/#`} className="btn btn-secondary">Back</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        {this.renderPlanets(this.props.planet)}
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        planet: state.planets
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSelectedplanet, clearPlanet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);