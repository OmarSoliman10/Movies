import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {props.userData? <>
        <li className="nav-item"> 
          <Link className="nav-link" to='home'>Home </Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link" to='movies'>Movies</Link>
        </li> 
        </> :''}
      </ul>


      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item d-flex align-items-center  order-lg-last order-last"> 
          <i className='fab fa-facebook mx-2'></i>
          <i className='fab fa-twitter mx-2'></i>
          <i className='fab fa-instagram mx-2'></i>
          <i className='fab fa-spotify mx-2'></i>
          <i className='fab fa-soundcloud mx-2'></i>
        </li> 

          {props.userData?<li className="nav-item  order-lg-last order-frist"> 
            <span onClick={props.logOut} className="nav-link" >Logout</span>
          </li> :<>
          <li className="nav-item  order-lg-last order-frist"> 
            <a className="nav-link" onClick={props.logOut} >Login</a>
          </li> 
          <li className="nav-item  order-lg-last order-frist">  
            <Link className="nav-link" to='register'>Register</Link>
          </li> </>}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
