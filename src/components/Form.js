import React from 'react'




const Form = () => {
    
    return (

        <>
        <div>

                

                        <form classNmae="form">
               
                   
                        <p className="formpara">Name*</p>
                        <input type="text" placeholder=""/> &nbsp; 
                       
                        
                    
                    
                        <input type="text" placeholder=""/>
                        <div className="box">
                        <div> <p className="formpara">First Name </p></div>
                       <div>  <p className="formpara">Last Name</p></div>
                       </div>  
                       <br/>

                    
                        
      
            
                
                <p className="formpara">Email*</p>
                <input type="email" placeholder=""/><br/><br/>

              
                <p className="formpara">Message.*</p>
                <input type="message" placeholder=""/><br/><br/>

                <button class="button">Submit</button>

            </form>
        </div>

        
        </>
    )
}

export default Form
