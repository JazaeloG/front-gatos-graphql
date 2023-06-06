import React from 'react';

const Gato = (props) => {
  const { gato } = props;
  return (
    <div>
      <div>
        Nombre: {gato.name}
        <br />
        Tipo: {gato.tipo}
        <br />
        Defensa: {gato.defensa}
        <br />
        Ataque: {gato.ataque}
        <br />
        Fuerte contra: {gato.strong}
        <br />
        Imagen Gato: 
        <img src={gato.image} width={"15%"} height={"15%"}></img>
        <br />
        Pierde contra: {gato.counter}
        <br />
        Velocidad: {gato.velocidad}
      </div>
      <br />
    </div>
  );
};

export default Gato;
