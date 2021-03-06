import React from 'react'
import CartWidget from '../CartWidget'
import './styles.css'
import { Link } from 'react-router-dom'
//Se usa Link para que React sea una SPA y no recargue la página cuando hago clic en la navegacion
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>eCommerceSG</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse centerNavbar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/category/men's clothing">Ropa de Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/category/jewelery">Joyeria
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/category/electronics">Electrónica
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar