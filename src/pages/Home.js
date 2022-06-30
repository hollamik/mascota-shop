import React from 'react';
import Layout from './Layout';
import pic1 from '../img/light.jpg'
import Footer from '../components/Footer';

function Home() {

    // const pics = pic1

  return (
    <>
      <Layout />
      <div>
      <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={pic1} alt="..." />
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">A wide Range of Pet</span>
                            <span class="section-heading-lower">Dog, Cats & Monkey</span>
                        </h2>
                        <p class="mb-s">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi
                        </p>
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                    </div>
                </div>
            </div>
        </section>
      </div>
        <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Our Promise</span>
                                <span class="section-heading-lower">To You</span>
                            </h2>
                            <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Voluptate ad sed, repellat praesentium quia tempore obcaecati </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
    );
}

export default Home;
