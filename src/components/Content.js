import React from "react";
import "./Content.scss";

function Content() {
  return (
    <>
    
    <hr/>
      <section id="content">
        <div id="sample">
          <h1 id="greet">Welcome to Triple Choco Home Bakes!</h1>
          <h4>Indulge in Chocolate Bliss</h4>
          <div id="discrip">
            Welcome to Triple Choco, where every bite is a delightful journey into the world of rich, chocolatey goodness! We take pride in crafting our home-baked treats with the finest ingredients, ensuring that each creation is not only delicious but also made with love and care. Thank you for visiting us, and we look forward to sharing our passion for baking with you! Whether you're celebrating a special occasion or simply indulging in a sweet moment, our delectable offerings are designed to satisfy your cravings.
          </div>
        </div>
        <div id="sample1">
          <img src="final.png" alt="" width="500px" height="500px" id="mainimg" />
        </div>
      </section>
   
      <div id="logos">
       
        <img src="insta.png" width='60px'/>
        <img src="fb.png" width='60px'/>
        <img src="yt.png" width='60px'/>
        <img src="linkedin.png" width='60px'/>
      </div>
    </>
  );
}

export default Content;
