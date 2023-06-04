import React from 'react';

const Gato = (props) => {
  const { Gato } = props;
  return (
    <div>
      <div>
        ({Gato.name} {Gato.tipo}{Gato.defensa}{Gato.ataque}{Gato.strong}{Gato.image}{Gato.counter}{Gato.velocidad})
      </div>
    </div>
  );
};

export default Gato;