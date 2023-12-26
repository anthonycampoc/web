import '../stylesheets/button/button.css';
import { React } from "react";

const Botonprincipal = ({text, id, onClick}) => {
    return (
        <div>
            <button
                className='btn-principal'
                id={id} 
                onClick={()=>{
                    onClick()
                }} 
                >
                  {text}
                </button>
        </div>
    )
}

export default Botonprincipal;