import Gato from './Gato';
import { useQuery, gql } from '@apollo/client';


const FEED_QUERY = gql`
{
    gatos {
    id
    name
    tipo
    ataque
    strong
    velocidad
    counter
    image
    defensa
    }
}
`;

const GatoList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.gatos.map((gato) => (
            <Gato key={gato.id} gato={gato} />
          ))}
        </>
      )}
    </div>
  );
};

export default GatoList;