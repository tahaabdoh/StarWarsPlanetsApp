import React from 'react';
import { Link } from 'react-router-dom';


export const PlanetContainer = ({
    planets,
    handlePage
  }) => {


// there is no Data
   if (!planets) return (
       <section className="container h-100 justify-content-center align-self-center loading">
          <img src="../images/loading.gif" alt="loading" width="100px" height="100px"/>
        </section>);


const ShowPlanets = (planets) => {
    if (planets.results) {
        return planets.results.map((item) => {
            let PID = item.url.split("/");
            PID = PID[PID.length - 2];
            return (
                <div className="col-md-6 col-xs-6 text-center planet-card" key={PID}>
                    <Link to={`/planets/${PID}`} >
                     <div className='card mb-3'>
                         <div className="card-body">
                              <h3>{item.name}</h3>
                     {/*   <span>{item.rotation_period}</span>
                        <div className='category_tag'>{item.orbital_period}</div>*/}
                         </div>
                       
                    </div>
                </Link>
                </div>
                
            )
        })
    }
}


return (
    <div className='container-right h-100'>
        <div className="pagination-btns mb-2 text-right">
            <div className="btn-group">
            <button className="prev-page-btn btn btn-secondary" onClick={() => handlePage(false)}>Prev</button>
            <button className="next-page-btn btn btn-secondary" onClick={() => handlePage(true)}>Next</button>
        </div>
        </div>
        

        <div className='row'>
            {ShowPlanets(planets)}
        </div>
    </div>
)



  };

export default PlanetContainer;
