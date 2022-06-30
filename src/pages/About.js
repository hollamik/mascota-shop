import React from 'react';
import Layout from './Layout';
import pic3 from '../img/mountain.jpg';
import Footer from '../components/Footer';


function About() {
  return (
    <>
    <Layout />
    <section className="page-section about-heading">
<div className="container">
<img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={pic3} alt="..."  />
<div className="about-heading-content">
<div className="row">
<div className="col-xl-9 col-lg-10 mx-auto">
<div className="bg-faded rounded p-5">
<h2 className="section-heading mb-4">
<span className="section-heading-upper">Healthy Pet, Strong Pets</span>
<span className="section-heading-lower">About Our Shop</span>
</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempor.</p>
<p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elitr
<em>lust</em>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<Footer />
</>
); 
}
export default About;
