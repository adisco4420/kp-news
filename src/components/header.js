import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
     <div>
       <header>
          <div className="top">
          <Link to="/">
                <div className="brand-logo">
                        <img src="/images/download.jpg" alt="kp-logo" />
                    </div>
            </Link>
           <div className="">KP-Sport-News
           <span className="fa fa-ball"></span>
           </div>
            </div>
           <hr/>
        </header>
   
        <div className="cat">
                <div >
                   <Link to="/" className="active"> Home</Link>
                </div>
                <div >
                    <Link to="/league"> League</Link>
                </div>
                <div >
                    <Link to="/foreign"> Foreign</Link>
                </div>
                <div >
                <Link to="/kpnews">KP-News</Link>
                </div>
                <div >
                <Link to="/highlight"> Highlight</Link>
                </div>
                <div >
                   <a href="http://www.livescores.com/" target="_blank" > Livescore</a>
                </div>
            </div>

    </div>
    )
}
export default Header;