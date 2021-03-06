import React from 'react';
import { withAuthorization } from '../Session';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

/* =================================== HOME PAGE CARDS =========================================== */
class Home extends React.Component {
  render(){
    return (
        <div className='pageBackground'>
          <div className="container">
        
          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row  mb-3">
              <div className="col-12 mt-3 ">
                <div class="card home-card">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='animated children playing on colorful bounce house together' src="http://clipartmag.com/images/playdate-clipart-23.png" height='100%' width='100%'/>
                    </div>
                    <div className="col-md-8 text-center">
                      <div class="card-body">
                          <h1 class="card-title">Play!</h1>
                          <h3 class="card-text">Watch, learn, and teach different parenting styles, customs, and child needs together through playdates.</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row mb-3">
              <div className="col-12 mt-3">
                <div class="card home-card">
                  <div class="card-horizontal">
                    <div className="col-md-8 text-center">
                        <div class="card-body">
                            <h1 class="card-title">Help!</h1>
                            <h3 class="card-text">Find parents that you vibe with? Check out their availability and see if they can help out with the kiddos now and again!</h3>
                        </div>
                    </div>
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='adult playing with infant and toys' src="https://previews.123rf.com/images/iconicbestiary/iconicbestiary1802/iconicbestiary180200002/96325802-female-babysitter-playing-with-baby-boy-.jpg" height='100%' width='100%'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to={ROUTES.SEARCH_AVAILABILITY}>
            <div className="row mb-3">
              <div className="col-12 mt-3 home-card">
                <div class="card">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <img className='card-img' alt='Parents standing together huddled in friendship' src="http://clipartmag.com/images/friendship-clipart-free-28.jpg" height='100%' width='100%'/>
                    </div>
                    <div className="col-md-8 text-center">
                      <div class="card-body">
                          <h1 class="card-title">Network!</h1>
                          <h3 class="card-text">Find support in common ground and build new relationships that help with both personal and professional navigation.</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>


          </div>
        </div>
      )
    }
  };

const condition = authUser => authUser != null;

export default  withAuthorization(condition)(Home);
