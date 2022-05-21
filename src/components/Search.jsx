import React from "react";
import {useParams} from "react-router-dom";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

function Search() {

    const {search} = useParams();
    console.log(search);
    
  return (
    <div>
      <Slider 
          nameClass=" slider-small"
          title = "Busqueda:"
          link=""
          titlelink=""
      />

        <div className="center main">
            <section className="content">
              <h2 className="subheader"> Ultimos articulos </h2>
              <Articles 
                  searched={search}
              />
              {/* <Article /> */}

              {/* <div class="articles" id="articles">                
                  </div> */}
            </section>

            <Sidebar 
                blog={true}
            />
      </div>
    </div>
  );
}

export default Search;
