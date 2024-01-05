import '../../stylesheets/testimonio/testimonio.css';
import Botonprincipal from '../../buttons/index.jsx';
import { React } from "react";

export function Testimonio(props) {
  const imagen = `/src/imgTest/testi-${props.imagen}.jpg`;
  const onClick1 = () => {
    alert(`Hola, soy ${props.nombre} tengo ${props.años} y vengo de ${props.pais}`);
  };
  return (
    <div id={`testimonio-${props.id}`} className='contenedor-testimonio'>
     <img className='imagen-testimonio' src={imagen} alt={props.nombre} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='años-testimonio'>Y tengo <b>{props.años} años</b></p>
        <p className='cargo-testimonio'>{props.cargo} en "<b>{props.empresa}</b>"</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
        <b><Botonprincipal text='Leer Más' id='1' onClick={onClick1} /></b>
      </div>
    </div>
    
  );
}