import React from 'react'
import Header from '../components/Header';
import Footer from "../components/Footer";

const Home = () => {
    return (

        <div>
            
            <div/>
            <Header/>
     
            <section id="bg">

            <h1> Where fitness is life.</h1>
            <p>Welcome to the neighborhood's toughest gym.</p>


            </section>

             <section>

                <h2 className="class" >Classes</h2>

            </section>

             <section id="grid">
  

                  <div>

                      <h3>Pull Your Weight</h3>
                      <p>M & Th, 12pm - 12:45pm</p>

                  </div>
            <div>
                <h3>Cardio Circuit</h3>
                <p>T & Th, 5pm - 6pm</p>

            </div>

            <div>

                <h3>Gymnastics</h3>
                <p>Sa, 11am-12pm</p>

            </div>

            <div>

                
                <h3>Powerlifting</h3>
                <p>M & W, 9am-10am</p>

            </div>



            </section>

            <section className="seeac">

            <a href="/">See All Classes</a>
            </section>

            <section className="about">

            <p> <span className="about1">About the Gym</span></p>
            <p>
            We offer an unpretentious and results-oriented community that’s invested in your goals and success. 
            Check your ego at the door and get ready to sweat!
            </p>

            </section>

            <section className="secbg">

                <h2>
                “There is nothing impossible to
                him who will try.”
                </h2>

                <p>
                — Alexander the Great
                </p>

            </section>

            <Footer/>


        </div>
    )
}

export default Home
