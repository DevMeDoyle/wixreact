import React from 'react'

const Header = () => {
    return (

        <header id="header">
        <div id="Linkset1">
            
                <nav>
                        <ul>
                            <li className="option_link"> <a className="About"  href="/about"> About </a> </li> &nbsp;&nbsp;
                            <li className="option_link"> <a  href="/"> Classes </a> </li> &nbsp;&nbsp;
                            <li className="option_link"> <a  href="/contact"> Contact </a> </li> &nbsp;&nbsp;

                        </ul>
                

                    </nav>
               
             
            
        </div>    
       

         <div>
             <nav>
                
                    
                <p className="irv1"> <a className="irv" href="/">Irving Fitness</a></p>
                   
            </nav>  
        </div>
        
       
        <div>
             <nav>
                
            
                   <p className="join1"> <a className="join" href="/">Join Now</a></p>
                
            </nav>  
        </div>
         

    </header>



    )
}

export default Header
