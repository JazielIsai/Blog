import React from "react";

function Sidebar({blog}) {
  return (
    <aside className="sidebar">

       {
          blog && 
            <div className="nav-blog sidebar-item">
              <h3> Puedes hacer esto </h3>
              <a href className="btn btn-success">
                {" "}
                Crear articulo{" "}
              </a>
            </div>
       } 

      <div className="search sidebar-item">
        <h3> Buscador </h3>
        <p>Encuentra el articulo que gustas</p>
        <form action="">
          <input 
            type="text" 
            name="search" 
            placeholder="Ej: Vida programador" 
          />
          <input
            type="submit"
            name="submit"
            value="Buscar"
            className="btn btn-submit"
          />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
