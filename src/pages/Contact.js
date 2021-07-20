import React from 'react'

const Contact = () => {
    return (
        <div>
            <Header/>

            <section id="sectac1">

<div>
    <h2>Please feel free to contact us with any questions.</h2>

    <div class="special">
        <h4>Phone</h4>
        <p>(555) 555-5555</p><br>

        <h4>E-mail</h4>
        <p>email@example.com</p>
    </div>
</div>
<div>

    <form/>
          
        <p/>Name*
        <input type="text" placeholder="">
        
        <input type="text" placeholder=""><br/><br/>
        
        <p>Email*</p>
        <input type="email" placeholder=""><br/><br>

        <p>Message.*</p>
        <input type="message" placeholder=""><br/><br/>

        <button class="button">Submit</button>




    </form>

</div>

</section>



            <Footer/>
        </div>
    )
}

export default Contact
