import { createRef, useState } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

function Formulario() {
  const [dataForm, setDataForm] = useState();

  const nameRef = createRef();
  const lastNameRef = createRef();
  const bioRef = createRef();
  const generoHombreRef = createRef();
  const generoMujerRef = createRef();


  const onSubmit = (e) => {
    e.preventDefault();

    setDataForm( () => {
      let gener;

      if(generoHombreRef.current.checked) {
          gener = generoHombreRef.current.value;
      } else {
          gener = generoMujerRef.current.value;
      }

      return {
        name: nameRef.current.value,
        last_name: lastNameRef.current.value,
        biography: bioRef.current.value,
        gender: gener
      }

    });

    console.log(dataForm)
  };

  return (
    <div className="formulario">
      <Slider
        nameClass="slider-small"
        title="Formulario"
        link=""
        titlelink=""
      />
      <div className="center main">
        <section className="content">
          {/* <h1 className="formulario">Formulario</h1>
          <hr/> */}
          <form className="mid-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor=""> Nombre: </label>
              <input type="text" name="name" ref={nameRef} />
            </div>

            <div className="form-group">
              <label htmlFor=""> Apellidos: </label>
              <input type="text" name="last_name" ref={lastNameRef} />
            </div>

            <div className="form-group">
              <label htmlFor=""> Biografia: </label>
              <textarea name="bio" ref={bioRef}></textarea>
            </div>

            <div className="form-group radiobuttons">
              <label htmlFor="">
                <input
                  type="radio"
                  name="genero"
                  value="Hombre"
                  ref={generoHombreRef}
                />
                Hombre
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="genero"
                  value="Mujer"
                  ref={generoMujerRef}
                />
                Mujer
              </label>
            </div>

            <input
              type="submit"
              name="submit"
              value="Enviar"
              className="btn btn-success"
            />
          </form>
        </section>

        <Sidebar />
      </div>
    </div>
  );
}

export default Formulario;
