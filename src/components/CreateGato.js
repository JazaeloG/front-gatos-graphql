import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_Gato_MUTATION = gql`
mutation PostMutation(
  $name: String!
  $tipo: String!
  $ataque: Float!  # Modificado a Float
  $velocidad: Float!  # Modificado a Float
  $defensa: Float!  # Modificado a Float
  $image: String!
  $strong: String!
  $counter: String!
) {
  post(
    name: $name
    tipo: $tipo
    ataque: $ataque
    velocidad: $velocidad
    defensa: $defensa
    image: $image
    strong: $strong
    counter: $counter
  ) {
    id
    name
    tipo
    ataque
    velocidad
    defensa
    image
    strong
    counter
  }
}
`;

const CreateGato = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    tipo: '',
    ataque: '',
    defensa: '',
    velocidad: '',
    counter: '',
    strong: '',
    image: ''
  });

  const [createLink] = useMutation(CREATE_Gato_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Un nombre para Gatomem"
          />
          <input
            className="mb2"
            value={formState.tipo}
            onChange={(e) =>
              setFormState({
                ...formState,
                tipo: e.target.value
              })
            }
            type="text"
            placeholder="El tipo de gatomem"
          />
          <input
            className="mb2"
            value={formState.image}
            onChange={(e) =>
              setFormState({
                ...formState,
                image: e.target.value
              })
            }
            type="text"
            placeholder="Imagen para tu gatomem"
          />
          <input
            className="mb2"
            value={formState.ataque}
            onChange={(e) =>
              setFormState({
                ...formState,
                ataque: e.target.value
              })
            }
            type="text"
            placeholder="Ataque de gatomem"
          />
          <input
            className="mb2"
            value={formState.defensa}
            onChange={(e) =>
              setFormState({
                ...formState,
                defensa: e.target.value
              })
            }
            type="text"
            placeholder="Defensa de gatomem"
          />
          <input
            className="mb2"
            value={formState.velocidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                velocidad: e.target.value
              })
            }
            type="text"
            placeholder="Velocidad de gatomem"
          />
          <input
            className="mb2"
            value={formState.counter}
            onChange={(e) =>
              setFormState({
                ...formState,
                counter: e.target.value
              })
            }
            type="text"
            placeholder="Counter de gatomem"
          />
          <input
            className="mb2"
            value={formState.strong}
            onChange={(e) =>
              setFormState({
                ...formState,
                strong: e.target.value
              })
            }
            type="text"
            placeholder="Fuerte contra gatomem"
          />
        </div>
        <button type="submit">Crear Gato</button>
      </form>
    </div>
  );
};

export default CreateGato;