import React from 'react';
import { Link } from 'react-router-dom'

function Layout() {
  
  return (
    <>
{/*<header>
<h1 className="site-heading text-center text-faded d-none d-lg-block">
<span className="site-heading-lower">Animal Gallery</span>
</h1>
</header>*/}
<nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
<div className="container">
<h3 className='logo'>Mascota.</h3> 
<button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mx-auto">
<li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
<li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/about">About</Link></li>
<li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/product">Products</Link></li>
<li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/store">Store</Link></li>
<li className="nav-item px-lg-4"><Link className="nav-link text-uppercase" to="/contact">Contact</Link></li>
</ul>
</div>
</div>
</nav>
{/* <Home /> */}
    </>
  );
}

export default Layout;
