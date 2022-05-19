import React from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

function Blog() {
  return (
    <div>
      <Slider 
          nameClass=" slider-small"
          title = "Blog"
          link=""
          titlelink=""
      />

        <div className="center main">
            <section class="content">
              <h2 class="subheader"> Ultimos articulos </h2>
              <Articles />
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

export default Blog;
