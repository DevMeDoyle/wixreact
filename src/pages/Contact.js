import React from 'react'
import Header from '../components/Header';
import Footer from "../components/Footer";
import Form from '../components/Form';

const Contact = () => {
    return (

        
            <>
            <Header/>
            <section id="seccontact1">

                <div>
                    <h2>Please feel free to contact us with any questions.</h2>

                        <div className="special">
                            <h4>Phone</h4>
                    <       p>(555) 555-5555</p><br/>

                            <h4>E-mail</h4>
                            <p>email@example.com</p>

                        </div>
        
                </div>

                
                    
                   <Form/>

                    

                






            </section>

            <Footer/>

            </>

        
    )
}

export default Contact
