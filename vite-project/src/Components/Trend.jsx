import React from 'react'
import Primary_Photo_Placeholder from "../images/Primary Photo Placeholder.png";
import Secondary_Photo_Placeholder from "../images/Secondary Photo Placeholder.png"
import Secondary_Photo_Placeholder1 from "../images/Secondary Photo Placeholder (1).png";
import Number_of_additional_NFTs from "../images/Number of additional NFTs.png";
import Artist_Card1 from "../images/Artist Card (1).png";
import Primary_Photo_Placeholder1 from "../images/Primary Photo Placeholder (1).png";
import Secondary_Photo_Placeholder2 from "../images/Secondary Photo Placeholder (2).png";
import Secondary_Photo_Placeholder3 from "../images/Secondary Photo Placeholder (3).png";
import Artist_Card2 from "../images/Artist Card (2).png";
import Primary_Photo_Placeholder2 from "../images/Primary Photo Placeholder (2).png";
import Secondary_Photo_Placeholder4 from "../images/Secondary Photo Placeholder (4).png";
import Secondary_Photo_Placeholder5 from "../images/Secondary Photo Placeholder (5).png";
import Artist_Card3 from "../images/Artist Card (3).png";






const Trend = () => {
  return (
    <div className='trend'>
<h3>Trending Collection</h3>
<h1>Checkout our weekly updated trending collection.</h1>
<div className="collection_card">
<img src={Primary_Photo_Placeholder} alt="" />
<div className="images">
<img src={Secondary_Photo_Placeholder} alt="" />
<img src={Secondary_Photo_Placeholder1} alt="" />
<img src={Number_of_additional_NFTs} alt="" />
</div>

<h2>DSGN Animals</h2>
<img src={Artist_Card1} alt="" />
</div>

<div className="collection_card">
<img src={Primary_Photo_Placeholder1} alt="" />
<div className="images">
<img src={Secondary_Photo_Placeholder2} alt="" />
<img src={Secondary_Photo_Placeholder3} alt="" />
<img src={Number_of_additional_NFTs} alt="" />
</div>

<h2>Magic Mushrooms</h2>
<img src={Artist_Card2} alt="" />
    
</div>

<div className="collection_card">
<img src={Primary_Photo_Placeholder2} alt="" />
<div className="images">
<img src={Secondary_Photo_Placeholder4} alt="" />
<img src={Secondary_Photo_Placeholder5} alt="" />
<img src={Number_of_additional_NFTs} alt="" />
</div>

<h2>Disco Machines</h2>
<img src={Artist_Card3} alt="" />
    
    
</div>
    </div>
  )
}

export default Trend