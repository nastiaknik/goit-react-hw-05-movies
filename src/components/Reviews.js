import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/service-api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);
    getReviews(id)
      .then(data => {
        setReviews(data);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [id]);

  return (
    <>
      {isLoading && (
        <div style={{ marginTop: '40px' }}>
          <Skeleton
            count={1}
            width={100}
            height={19}
            style={{
              display: 'block',
              marginLeft: '40px',
            }}
          />
          <Skeleton
            count={1}
            width={1290}
            height={90}
            style={{ margin: '0 30px 0 40px' }}
          />
        </div>
      )}
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          textAlign: 'start',
          gap: '10px',
        }}
      >
        {!isLoading &&
          reviews &&
          reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p style={{ paddingRight: '30px' }}>{content}</p>
            </li>
          ))}
      </ul>
      {!isLoading && reviews && reviews.length === 0 && (
        <p style={{ textAlign: 'start', marginLeft: '40px' }}>
          We don't have any reviews about this movie yet.
        </p>
      )}
    </>
  );
};

export default Reviews;
