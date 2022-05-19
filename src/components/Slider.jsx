import React from 'react'
import {NavLink} from 'react-router-dom';

function Slider({nameClass, title, link, titlelink}) {
    return (
        <div className={"slider " + nameClass}>
            <h1> {title} </h1>
            {
                link !== "" && 
                titlelink !== "" &&
                    <NavLink to={"/"+link} className="btn-white"> { titlelink } </NavLink>        
            }
        </div>
    )
}

export default Slider
