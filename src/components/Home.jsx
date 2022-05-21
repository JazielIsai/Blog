import React from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

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
        <section className="content">
          <h2 className="subheader"> Ultimos articulos </h2>

          <Articles 
            home={true}
          />

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
