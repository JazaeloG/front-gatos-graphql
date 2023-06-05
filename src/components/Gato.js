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
        Imagen Gato: {gato.image}
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