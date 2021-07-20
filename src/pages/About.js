import React from 'react'
import Header from '../components/Header';
import Footer from "../components/Footer";

const About = () => {
    return (

        <div>

            <Header/>

            <section id="secabt1">

                <div> 
                    <h2>About</h2>  
                </div>

                <div>
                        <p>
                            Get ready to tear down obstacles of the mind and body. 
                            We at Irving Fitness believe that getting yourself back 
                            to work means setting your own pace. 
                            So start your journey with us today. 
                        </p>
                </div>


            </section>

            <section id="sec2"> 

                <div>
                    <p>.</p>
                </div>

                <div>

                    <strong>Location</strong><br/>
                    <p/>123 Nameles St. <br/> Houston, TX 00000

                </div>

                <div>

                <strong>Hours</strong>
                <p>7am - 8pm Weekdays<br/> 9am - 3pm Weekends</p>

                </div>

            </section>

            <section id="sec3">

                <div id="bgi">
                    <p>test</p>
                </div>

            </section>

            <section id="sec4">

                <div>
                    <h2>Equipment</h2>
                </div>

            <div>
                
                <ul>
                <li>Battle Ropes & Pulleys</li>
                    <li>Suspended Ropes</li>
                    <li>Barbells & Bumper Plates</li>
                    <li>Free Weights</li>
                    <li>Weight Training Gloves</li>
                    <li>Step Benches</li>                
                </ul>

                        </div>
            <div>
                <ul>
                    <li>Yoga Mats & Blocks</li>
                    <li>Gymnastics Studio & Rings</li>
                    <li>Custom Obstacle Course</li>
                    <li>Custom Obstacle Course</li>
                    <li>Showers & Towels</li>
                    <li>Premium Toiletries</li>
                </ul>

            </div>
        </section>

            <Footer/>
        </div>
    )
}

export default About
