import React from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Article from "./Articles";

function Home() {
  return (
    <div>
      <Slider 
          nameClass=" slider-big"
          title = "Bienvenido a mi blog de programación"
          link="blog"
          titlelink="Ir al Blog"
      />

      <div className="center main">
        <section class="content">
          <h2 class="subheader"> Ultimos articulos </h2>

          <Article />

          {/* <div class="articles" id="articles">                
              </div> */}
        </section>

        <Sidebar 
            
        />
      </div>
    </div>
  );
}

export default Home;
