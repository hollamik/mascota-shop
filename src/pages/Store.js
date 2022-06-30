import React from 'react';
import Layout from './Layout';
import pic2 from '../img/moon.jpg';
import Footer from '../components/Footer';

const Store = () => {
  return (
    <>
    <Layout />
    <div>
    <section class="page-section cta">
    <div class="container">
    <div class="row">
    <div class="col-xl-9 mx-auto">
    <div class="cta-inner bg-faded text-center rounded">
    <h2 class="section-heading mb-5">
    <span class="section-heading-upper">Come On In</span>
    <span class="section-heading-lower">We're OPen from mon-sat</span>
    </h2>
                            <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Sunday
                                    <span class="ms-auto">Closed</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Monday
                                    <span class="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Tuesday
                                    <span class="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Wednesday
                                    <span class="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Thursday
                                    <span class="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Friday
                                    <span class="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li class="list-unstyled-item list-hours-item d-flex">
                                    Saturday
                                    <span class="ms-auto">9:00 AM to 5:00 PM</span>
                                </li>
                            </ul>
                            <p class="address mb-5">
                                <em>
                                    <strong>70b itafaji street, Dolphin Estate</strong>
                                    <br />
                                    Ikoyi, Lagos.
                                </em>
                            </p>
                            <p class="mb-0">
                                <small><em>You can Call us Anytime</em></small>
                                <br />
                                (+234) 8064139378
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div>
    <section class="page-section about-heading">
            <div class="container">
                <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={pic2} alt="..." />
                <div class="about-heading-content">
                    <div class="row">
                        <div class="col-xl-9 col-lg-10 mx-auto">
                            <div class="bg-faded rounded p-5">
                                <h2 class="section-heading mb-4">
                                    <span class="section-heading-upper">Best of the best, pet Breed.</span>
                                    <span class="section-heading-lower">About our Pet Shop</span>
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elitr
     Voluptate ad sed, repellat praesentium quia tempore obcaecati
      quam quod alias rerum et nam libero ab officiis
     dolore repellendus blanditiis voluptatibus excepturi.</p> 
                                <p class="mb-0">
    Lorem ipsum dolor sit amet consectetur adipisicing elitr</p>
     
                                    <em>lust</em>
                                    <p>
                                    with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </>
  );

};

export default Store;



