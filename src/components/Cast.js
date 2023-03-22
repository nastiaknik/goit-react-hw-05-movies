import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'utils/service-api';
import Loader from './Skeleton/Skeleton';
import notFound from './defaultImages/notFound.webp';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);
    getCast(id)
      .then(data => {
        setCast(data);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(isLoading => !isLoading));
  }, [id]);

  return (
    <>
      {isLoading && <Loader page={`/movies/${id}/cast`} />}

      {!isLoading && cast.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {cast.map(({ id, name, profile_path, character }) => (
            <li
              key={id}
              style={{
                width: '300px',
                height: '527px',
                border: '1px solid gray',
              }}
            >
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : notFound
                }
                alt={name}
                width="300"
                height="450"
              />
              <h2 style={{ padding: 0, margin: 0, marginBottom: '10px' }}>
                {name}
              </h2>
              <p style={{ padding: 0, margin: 0 }}>{character}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && cast.lentgh < 0 && (
        <p style={{ textAlign: 'start', marginLeft: '40px' }}>
          Cast not known.
        </p>
      )}
    </>
  );
};

export default Cast;
