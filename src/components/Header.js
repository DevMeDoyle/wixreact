import React from 'react'

const Header = () => {
    return (

        <header id="header">
        <div id="Linkset1">
            <nav>
                <ul>
                    <li className="option_link"> <a className="About"  href="/"> About </a> </li> &nbsp;&nbsp;
                    <li className="option_link"> <a  href="/"> Classes </a> </li> &nbsp;&nbsp;
                    <li className="option_link"> <a  href="/"> Contact </a> </li> &nbsp;&nbsp;

                </ul>
        

            </nav>
        </div>    
       

         <div id="div2">
             <nav>
                <ul>
                    <li className="option_link1"><h1 className="irv1">  <a className="irv" href="/">Irving Fitness</a></h1></li>
            
                    <li className="option_link"><p className="join1"> <a className="join" href="/">Join Now</a></p></li>
                </ul>
            </nav>  
        </div>
        
       

         

    </header>

    )
}

export default Header
