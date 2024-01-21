import React from 'react'
import Logo from "../images/Logo.png";
import User from "../images/User.png";
import RocketLaunch from "../images/RocketLaunch.png"
import Image_Placeholder from "../images/Image Placeholder.png";
import Artist_Card4 from "../images/Artist Card (4).png";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (

    <div className='navbar'>

<div className="header" >

    <img src={Logo}  />
    
    <ul>
        <li text-white-600><Link to='Marketplase'>Marketplase</Link></li>
        <li><Link to='Rankings'>Rankings</Link></li>
        <li><Link to='Connectawallet'>Connect a wallet</Link></li>
        <li><a href="#"><button className='btn' ><img src={User} /><h1>Sign Up</h1></button></a></li>
    </ul>

</div>
 
<div className="footer">

<div className="text">

    <h1>Discover Digital Art & Collect NFTs</h1>
    <h2>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h2>
    <button className='btn'><img src={RocketLaunch} alt="" />Get Started</button>

<div className="total_sale">

    <h1><b>240k+</b>Total Sale </h1>
    <h1><b>100k+</b>Auctions </h1>
    <h1><b>240k+</b>Artists </h1>

</div>

</div>

<div className="image">

<div className="card">
<img src={Image_Placeholder} alt="" />
<h5>Space Walking</h5>
<h6><img  src={Artist_Card4} alt="" /></h6>
</div>

</div>


</div>




    </div>
  )
}

export default Navbar