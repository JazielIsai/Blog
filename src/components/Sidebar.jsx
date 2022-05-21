import { createRef, useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";

function Sidebar({ blog }) {
  const [stateSearch, setStateSearch] = useState({
    search: null,
    redirect: false,
  });
  const [readSearch, setReadSearch] = useState('');
  // const searchRef = createRef();

  const handleRedirectToSearch = (e) => {
    e.preventDefault();
    
    setReadSearch(e.target.search.value)
    
    e.target.reset();

  };

  const onChangeSearch = (e) => {

    // setReadSearch(e.target.value);
  }

  return (
    <>
      {
        readSearch.length > 0  &&
          <Navigate to={'/blog/searching/' + readSearch} />
      }
      <aside className="sidebar">
        {
          blog && (
          <div className="nav-blog sidebar-item">
            <h3> Puedes hacer esto </h3>
            <NavLink to={'/blog/create'} className="btn btn-success">
              {" "}
              Crear articulo
              {" "}
            </NavLink>
          </div>
          )
        }

        <div className="search sidebar-item">
          <h3> Buscador </h3>
          <p>Encuentra el articulo que gustas</p>
          <form onSubmit={handleRedirectToSearch}>
            <input
              type="text"
              name="search"
              placeholder="Ej: Inteligencia"
              // value={readSearch}
              onChange={onChangeSearch}
              // ref={searchRef}
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
    </>
  );
}

export default Sidebar;
