import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footers from "../components/Footers.jsx";
import Team from '../components/Team.jsx';
import Hero from '../components/Hero.jsx'
const Aboutdc=()=>
{
  useEffect(() => {
    window.scrollTo(0, 0);
  })
    return(
        <>
             <div className='head fixed-top header-transparent'>
        <header id="header" >
          <Header />
        </header>
      </div>
        <Hero/>
    <section id="team" className="team">
       <Team/>
      </section>

      <footer id="footer">
          <Footers/>
        </footer>
        </>
    )
}
export default Aboutdc;